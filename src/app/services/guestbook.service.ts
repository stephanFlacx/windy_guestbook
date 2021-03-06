import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GuestbookDetailModel,
        GuestbookOverviewModel,
        GuestbookPostNewEntryModel,
        GuestbookCommentModel,
        GuestbookClaps,
        GuestbookUsers} from '../models/guestbook.model';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class GuestbookService {
  constructor(
    private http: HttpClient,
    private readonly authService: AuthenticationService
  ) { }

  public getGuestbookEntries(): Observable<GuestbookOverviewModel[]> {
    return this.http.get<GuestbookOverviewModel[]>('/posts');
  }

  public  getGuestbookDetail(id: string): Observable<GuestbookDetailModel>{
    return this.http.get<GuestbookDetailModel>(`posts/${id}`);
  }

  public postGuestbookEntry(entry: GuestbookPostNewEntryModel): Observable<void> {
      return this.http.post<void>('/posts', entry);
  }

  public deleteGuestbookEntry(id: string): Observable<void> {
      const headers = this.authService.getSessionTokenHeader();
      return this.http.delete<void>(`posts/${id}`, {headers});
  }

  public postGuestbookComment(id: string, comment: GuestbookCommentModel): Observable<void> {
      return this.http.post<void>(`posts/${id}/comments`, comment);
  }

  public putClap(id: string, claps: GuestbookClaps): Observable<void> {
      return this.http.put<void>(`posts/${id}/clap`, claps);
  }

  public getGuestbookUsers(): Observable<GuestbookUsers[]> {
    const headers = this.authService.getSessionTokenHeader();
    return this.http.get<GuestbookUsers[]>('/users', {headers});
  }
}
