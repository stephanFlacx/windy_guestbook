import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MakeGuestbookEntryComponent} from './make-guestbook-entry.component';
import {RouterModule} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [MakeGuestbookEntryComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
  ]
})

export class MakeGuestbookEntryModule { }
