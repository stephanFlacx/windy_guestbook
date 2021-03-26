import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GuestbookOverviewComponent} from './guestbook-overview.component';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [GuestbookOverviewComponent],
  exports: [
    GuestbookOverviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class GuestbookOverviewModule { }
