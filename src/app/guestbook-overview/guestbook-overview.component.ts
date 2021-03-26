import { Component, OnInit } from '@angular/core';
import {GuestbookOverviewModel} from '../guestbook.model';
import {GuestbookService} from '../guestbook.service';

@Component({
  selector: 'app-guestbook-overview',
  templateUrl: './guestbook-overview.component.html',
  styleUrls: ['./guestbook-overview.component.scss']
})
export class GuestbookOverviewComponent implements OnInit {
  public guestbookEntries: GuestbookOverviewModel[] = [];

  constructor(private guestbookService: GuestbookService) {
  }

  public ngOnInit(): void {
    this.guestbookService.getGuestbookEntries()
        .subscribe((guestbookEntries) => {
          console.log('got everything!');
          console.log(this.guestbookEntries);
          this.guestbookEntries = guestbookEntries;
        });
  }

  getRandomColor(): any {
    const colors = ['#E3F2FD', '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3'];
    const randomNumber = Math.floor(Math.random() * colors.length);
    // console.log(randomNumber);
    return colors[randomNumber];
  }
}


