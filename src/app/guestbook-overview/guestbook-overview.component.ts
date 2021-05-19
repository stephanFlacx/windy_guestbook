import { Component, OnInit } from '@angular/core';
import {GuestbookOverviewModel} from '../models/guestbook.model';
import {GuestbookService} from '../services/guestbook.service';

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
          this.guestbookEntries = guestbookEntries;
        });
  }
}


