import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GuestbookOverviewComponent} from './guestbook-overview.component';



@NgModule({
  declarations: [GuestbookOverviewComponent],
  exports: [
    GuestbookOverviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GuestbookOverviewModule { }
