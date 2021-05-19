import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestbookDetailComponent } from './guestbook-detail.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {AddCommentModule} from '../shared/add-comment/add-comment.module';

@NgModule({
  declarations: [GuestbookDetailComponent],
    exports: [
        GuestbookDetailComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    AddCommentModule,
  ]
})
export class GuestbookDetailModule { }
