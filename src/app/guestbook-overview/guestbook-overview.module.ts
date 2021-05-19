import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GuestbookOverviewComponent} from './guestbook-overview.component';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {GuestbookTileComponent} from './guestbook-tile/guestbook-tile.component';



@NgModule({
  declarations: [GuestbookOverviewComponent, GuestbookTileComponent],
  exports: [
    GuestbookOverviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class GuestbookOverviewModule { }
