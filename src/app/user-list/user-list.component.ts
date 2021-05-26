import {Component, OnInit} from '@angular/core';
import {GuestbookService} from '../services/guestbook.service';
import {GuestbookUsers} from '../models/guestbook.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public guestbookUsers: GuestbookUsers[] = [];

  constructor(private guestbookService: GuestbookService) {
  }

  ngOnInit(): void {
    this.guestbookService.getGuestbookUsers()
    .subscribe((guestbookUsers) => {
      this.guestbookUsers = guestbookUsers;
    });
  }
}
