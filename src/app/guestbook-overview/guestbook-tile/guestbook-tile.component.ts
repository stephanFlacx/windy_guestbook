import {Component, Input, OnInit} from '@angular/core';
import {GuestbookOverviewModel} from '../../shared/guestbook.model';
import {RandomColorService} from '../../shared/random-color.service';

@Component({
  selector: 'app-guestbook-tile',
  templateUrl: './guestbook-tile.component.html',
  styleUrls: ['./guestbook-tile.component.scss']
})
export class GuestbookTileComponent implements OnInit {

  @Input()
  public guestbookEntryPass!: GuestbookOverviewModel;

  constructor(public randomColorService: RandomColorService) { }

  ngOnInit(): void {
  }

}
