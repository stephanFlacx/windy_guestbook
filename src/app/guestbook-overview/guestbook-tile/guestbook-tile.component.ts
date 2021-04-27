import {Component, Input, OnInit} from '@angular/core';
import {GuestbookOverviewModel} from '../../guestbook.model';

@Component({
  selector: 'app-guestbook-tile',
  templateUrl: './guestbook-tile.component.html',
  styleUrls: ['./guestbook-tile.component.scss']
})
export class GuestbookTileComponent implements OnInit {

  @Input()
  public guestbookEntryPass!: GuestbookOverviewModel;

  constructor() { }

  ngOnInit(): void {
  }

  getRandomColor(): any {
    const colors = ['#E3F2FD', '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3'];
    const randomNumber = Math.floor(Math.random() * colors.length);
    // console.log(randomNumber);
    return colors[randomNumber];
  }
}
