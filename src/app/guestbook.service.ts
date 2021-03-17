import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GuestbookModel} from './guestbook.model';

@Injectable({
  providedIn: 'root'
})
export class GuestbookService {
  constructor(private http: HttpClient) { }

  public getGuestbookEntries(): Observable<GuestbookModel[]> {
    return this.http.get<GuestbookModel[]>('/posts');
  }
}
