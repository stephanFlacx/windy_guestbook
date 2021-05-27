import {Component, OnInit} from '@angular/core';
import {GuestbookOverviewModel} from '../models/guestbook.model';
import {GuestbookService} from '../services/guestbook.service';
import {LayoutService} from '../services/layout/layout.service';
import {Layout} from '../services/layout/layout.model';

@Component({
  selector: 'app-guestbook-overview',
  templateUrl: './guestbook-overview.component.html',
  styleUrls: ['./guestbook-overview.component.scss']
})
export class GuestbookOverviewComponent implements OnInit {
  public guestbookEntries: GuestbookOverviewModel[] = [];
  public buttonsAbove = false;

  constructor(
    private guestbookService: GuestbookService,
    public layoutService: LayoutService
  ) {}

  public ngOnInit(): void {
    this.guestbookService.getGuestbookEntries()
        .subscribe((guestbookEntries) => {
          this.guestbookEntries = guestbookEntries;
        });

    this.layoutService.layout$.subscribe(layout => {
      switch (layout) {
        case Layout.desktop:
          this.buttonsAbove = false;
          break;
        case Layout.tablet:
          this.buttonsAbove = false;
          break;
        case Layout.phone:
          this.buttonsAbove = true;
          break;
      }
    });
  }
}


