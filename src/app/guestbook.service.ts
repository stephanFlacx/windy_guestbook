import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GuestbookDetailModel, GuestbookOverviewModel} from './guestbook.model';

@Injectable({
  providedIn: 'root'
})
export class GuestbookService {
  constructor(private http: HttpClient) { }

  public getGuestbookEntries(): Observable<GuestbookOverviewModel[]> {
    return this.http.get<GuestbookOverviewModel[]>('/posts');
  }

  public  getGuestbookDetail(id: string): Observable<GuestbookDetailModel[]>{
    return this.http.get<GuestbookDetailModel[]>('posts/${id}');
  }
}
