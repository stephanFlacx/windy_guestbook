import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GuestbookDetailComponent} from './guestbook-detail.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {Routes, RouterModule} from '@angular/router';
import {AddCommentComponent} from './add-comment/add-comment.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: GuestbookDetailComponent},
];

@NgModule({
  declarations: [GuestbookDetailComponent, AddCommentComponent],
    exports: [
        GuestbookDetailComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class GuestbookDetailModule { }
