import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GuestbookDetailComponent} from './guestbook-detail.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {AddCommentModule} from '../shared/add-comment/add-comment.module';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', component: GuestbookDetailComponent},
];

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
    MatButtonModule,
    AddCommentModule,
    RouterModule.forChild(routes)
  ]
})
export class GuestbookDetailModule { }
