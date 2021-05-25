import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GuestbookClaps, GuestbookDetailModel} from '../models/guestbook.model';
import {GuestbookService} from '../services/guestbook.service';
import {detailIdParam} from '../shared/constants';
import {Router} from '@angular/router';

@Component({
  selector: 'app-guestbook-detail',
  templateUrl: './guestbook-detail.component.html',
  styleUrls: ['./guestbook-detail.component.scss']
})
export class GuestbookDetailComponent implements OnInit {
  public guestbookDetail: GuestbookDetailModel | undefined;
  public readonly guestbookClaps: GuestbookClaps = {claps: 1};
  public detailId!: string;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly guestbookService: GuestbookService,
  ) { }

  ngOnInit(): void {
    this.detailId = this.activatedRoute.snapshot.params[detailIdParam];
    console.log(this.detailId);
    this.guestbookService.getGuestbookDetail(this.detailId)
        .subscribe((guestbookDetail) => {
          this.guestbookDetail = guestbookDetail;
          console.log(this.guestbookService);
        });  }

  addClap(): void{
    const detailId = this.activatedRoute.snapshot.params[detailIdParam];
    this.guestbookService.putClap(detailId, this.guestbookClaps).subscribe(() => this.ngOnInit());
  }
}
