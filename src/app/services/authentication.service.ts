import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user.model';
import {BehaviorSubject, interval, Observable, Subscription} from 'rxjs';
import {SessionInfo} from '../models/session.model';
import {switchMap, take, tap} from 'rxjs/operators';
import {SESSION_STORAGE} from '../shared/constants';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private readonly USER_URL = 'users';
    private readonly USER_SESSION_URL = this.USER_URL + '/session';

    private readonly loggedInUserNameSubject$ = new BehaviorSubject<string | null>(null);

    private refreshSubscription: Subscription | undefined;

    public get loggedInUserName$(): Observable<string | null> {
        return this.loggedInUserNameSubject$.asObservable();
    }

    public set loggedInUserName(username: string | null) {
        this.loggedInUserNameSubject$.next(username);
    }
    constructor(
        private readonly http: HttpClient,
        private readonly router: Router
    ) {
        this.loggedInUserName = sessionStorage.getItem(SESSION_STORAGE.LOGGED_IN_USER_NAME);
        const sessionInfoString = sessionStorage.getItem(SESSION_STORAGE.SESSION_INFO);
        if (sessionInfoString) {
            this.startRefreshTokenTimer(JSON.parse(sessionInfoString) as SessionInfo);
        }
    }

    public registerUser(user: User): Observable<void> {
        return this.http.post<void>(this.USER_URL, user);
    }

    public login(user: User): Observable<SessionInfo> {
        return this.http.post<SessionInfo>(this.USER_SESSION_URL, user)
            .pipe(
                tap(() => this.setLoggedInUserName(user)),
                tap(sessionInfo => sessionStorage.setItem(SESSION_STORAGE.SESSION_INFO, JSON.stringify(sessionInfo))),
                tap(sessionInfo => this.startRefreshTokenTimer(sessionInfo))
            );
    }

    public logout(): void {
        sessionStorage.removeItem(SESSION_STORAGE.SESSION_INFO);
        sessionStorage.removeItem(SESSION_STORAGE.LOGGED_IN_USER_NAME);

        this.loggedInUserName = null;
        this.stopRefreshTokenTimer();

        this.http.delete(this.USER_SESSION_URL).subscribe(() => this.router.navigate(['/login']));
    }

    /**
     * returns a http header with the session token set if and only if logged in.
     * when not logged in, returns an empty header.
     */
    public getSessionTokenHeader(): HttpHeaders {
        const sessionInfoString = sessionStorage.getItem(SESSION_STORAGE.SESSION_INFO);
        if (sessionInfoString) {
            const sessionInfo = JSON.parse(sessionInfoString) as SessionInfo;
            return new HttpHeaders().set('Authorization', `Bearer ${sessionInfo?.sessionToken}`);
        }

        return new HttpHeaders();
    }

    private setLoggedInUserName(user: User): void {
        sessionStorage.setItem(SESSION_STORAGE.LOGGED_IN_USER_NAME, user.username);
        this.loggedInUserName = user.username;
    }

    public startRefreshTokenTimer(sessionInfo: SessionInfo): void {
        // just in case this method is called twice
        this.stopRefreshTokenTimer();

        // parse json object from base64 encoded jwt token
        const jwtToken = JSON.parse(atob(sessionInfo.sessionToken.split('.')[1]));

        const expires = new Date(jwtToken.exp * 1000);
        const ONE_MINUTE = 60 * 1000;
        const refreshInterval = expires.getTime() - Date.now() - ONE_MINUTE;

        this.refreshSubscription = interval(refreshInterval)
            .pipe(
                take(1),
                switchMap(() => this.refreshSession(sessionInfo.refreshToken))
            )
            .subscribe((newSessionInfo: SessionInfo) => {
                sessionStorage.setItem(SESSION_STORAGE.SESSION_INFO, JSON.stringify(newSessionInfo))
                this.startRefreshTokenTimer(newSessionInfo);
            });
    }

    private stopRefreshTokenTimer(): void {
        this.refreshSubscription?.unsubscribe();
    }

    private refreshSession(refreshToken: string): Observable<SessionInfo> {
        return this.http.put<SessionInfo>(this.USER_SESSION_URL, {},
            {
                headers: new HttpHeaders().append('refreshToken', refreshToken)
            });
    }
}

