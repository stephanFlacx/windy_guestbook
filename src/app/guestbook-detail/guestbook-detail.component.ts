import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GuestbookDetailModel} from '../models/guestbook.model';
import {GuestbookService} from '../services/guestbook.service';
import {detailIdParam} from '../shared/constants';

@Component({
  selector: 'app-guestbook-detail',
  templateUrl: './guestbook-detail.component.html',
  styleUrls: ['./guestbook-detail.component.scss']
})
export class GuestbookDetailComponent implements OnInit {
  public guestbookDetail: GuestbookDetailModel | undefined;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly guestbookService: GuestbookService
  ) { }

  ngOnInit(): void {
    const detailId = this.activatedRoute.snapshot.params[detailIdParam];
    console.log(detailId);
    this.guestbookService.getGuestbookDetail(detailId)
        .subscribe((guestbookDetail) => {
          this.guestbookDetail = guestbookDetail;
          console.log(this.guestbookService);
        });  }

}
