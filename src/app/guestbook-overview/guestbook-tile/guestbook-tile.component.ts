import {Component, Input, OnInit, AfterContentInit, Output, EventEmitter} from '@angular/core';
import {GuestbookOverviewModel} from '../../models/guestbook.model';
import {RandomColorService} from '../../services/random-color.service';
import {RandomImagePathService} from '../../services/random-image-path.service';
import {GuestbookService} from '../../services/guestbook.service';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-guestbook-tile',
  templateUrl: './guestbook-tile.component.html',
  styleUrls: ['./guestbook-tile.component.scss']
})
export class GuestbookTileComponent implements OnInit, AfterContentInit {
  public topColor = '#FFFFFF';
  public imageFilename = '';

  @Input()
  public guestbookEntryPass!: GuestbookOverviewModel;

  @Input()
  public detailIdPass!: string;

  @Output()
  public entryDeleted = new EventEmitter();

  constructor(
    public randomColorService: RandomColorService,
    public randomImagePathService: RandomImagePathService,
    private readonly guestbookService: GuestbookService,
    public readonly authService: AuthenticationService,
  ) { }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    const randomNumber = 5;
    const stringNumber = randomNumber.toString().padStart(3, '0');
    console.log(stringNumber);
    this.topColor = this.randomColorService.getColor();
    this.imageFilename = this.randomImagePathService.getFilename();
  }

  deleteEntry(): void{
    this.guestbookService.deleteGuestbookEntry(this.detailIdPass).subscribe(() => window.location.reload());
    this.entryDeleted.emit();
  }
}
