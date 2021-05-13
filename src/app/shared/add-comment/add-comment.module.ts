import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {AddCommentComponent} from './add-comment.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [AddCommentComponent],
  exports: [
    AddCommentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class AddCommentModule { }
