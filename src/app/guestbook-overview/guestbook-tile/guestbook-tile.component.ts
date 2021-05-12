import {Component, Input, OnInit, AfterContentInit} from '@angular/core';
import {GuestbookOverviewModel} from '../../models/guestbook.model';
import {RandomColorService} from '../../services/random-color.service';
import {RandomImagePathService} from '../../services/random-image-path.service';

@Component({
  selector: 'app-guestbook-tile',
  templateUrl: './guestbook-tile.component.html',
  styleUrls: ['./guestbook-tile.component.scss']
})
export class GuestbookTileComponent implements OnInit, AfterContentInit {
  public topColor = '#FFFFFF';
  public imagePath = '';

  @Input()
  public guestbookEntryPass!: GuestbookOverviewModel;

  constructor(
    public randomColorService: RandomColorService,
    public randomImagePathService: RandomImagePathService
  ) { }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    const randomNumber = 5;
    const stringNumber = randomNumber.toString().padStart(3, '0');
    console.log(stringNumber);
    this.topColor = this.randomColorService.getColor();
    this.imagePath = this.randomImagePathService.getPath();
  }
}
