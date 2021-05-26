import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ]
})
export class UserListModule { }
