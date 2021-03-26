import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestbookDetailComponent } from './guestbook-detail.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
    declarations: [GuestbookDetailComponent],
    exports: [
        GuestbookDetailComponent
    ],
    imports: [
        CommonModule,
        MatCardModule
    ]
})
export class GuestbookDetailModule { }
