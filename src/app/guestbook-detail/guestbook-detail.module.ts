import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestbookDetailComponent } from './guestbook-detail.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [GuestbookDetailComponent],
    exports: [
        GuestbookDetailComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule

    ]
})
export class GuestbookDetailModule { }
