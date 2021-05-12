import { Component } from '@angular/core';
import {GlobalLoadingService} from '../../services/global-loading.service';
import {Router} from '@angular/router';
import {User} from '../../models/user.model';
import {AuthenticationService} from '../../services/authentication.service';
import {finalize, switchMap, concatMap} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   public isRegistered = true;

    public user: User = {
        username: '',
        password: ''
    };

    public globalError: string | undefined;

    constructor(
        private readonly authService: AuthenticationService,
        private readonly router: Router,
        private readonly globalLoadingService: GlobalLoadingService
    ) {
    }

    public onFormSubmit(): void {
        this.globalLoadingService.isLoading = true;

        if (this.isRegistered) {
            this.authService.login(this.user)
                .pipe(
                    finalize(() => this.globalLoadingService.isLoading = false)
                )
                .subscribe(() => {
                    this.router.navigate(['/']);
                }, () => {
                    this.globalError = 'We couldn’t find an account matching the username and password you entered. Please check your username and password and try again.';
                });
        } else {
            this.authService.registerUser(this.user)
                .pipe(
                    concatMap(() => this.authService.login(this.user)),
                    finalize(() => this.globalLoadingService.isLoading = false)
                )
                .subscribe(() => {
                    this.router.navigate(['/']);
                });
        }
    }

    public onRegistrationLoginSwitch(): void {
        this.isRegistered = !this.isRegistered;
        this.user = {
            username: '',
            password: ''
        };
        this.globalError = undefined;
    }


}
