import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GuestbookOverviewComponent } from './guestbook-overview/guestbook-overview.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {GuestbookOverviewModule} from './guestbook-overview/guestbook-overview.module';
import {ApiInterceptor} from './api.interceptor';
import {GuestbookDetailModule} from './guestbook-detail/guestbook-detail.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GuestbookOverviewModule,
    GuestbookDetailModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
