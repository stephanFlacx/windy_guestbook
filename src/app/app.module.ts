import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BannerComponent} from './shared/banner/banner.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {GuestbookOverviewModule} from './guestbook-overview/guestbook-overview.module';
import {ApiInterceptor} from './api.interceptor';
import {GuestbookDetailModule} from './guestbook-detail/guestbook-detail.module';
import {AddCommentModule} from './shared/add-comment/add-comment.module';
import {LoginModule} from './login/login/login.module';
import {MakeGuestbookEntryModule} from './make-guestbook-entry/make-guestbook-entry.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {UserListModule} from './user-list/user-list.module';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GuestbookOverviewModule,
    GuestbookDetailModule,
    AddCommentModule,
    LoginModule,
    MakeGuestbookEntryModule,
    UserListModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
