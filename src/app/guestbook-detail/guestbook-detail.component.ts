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

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly guestbookService: GuestbookService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    const detailId = this.activatedRoute.snapshot.params[detailIdParam];
    console.log(detailId);
    this.guestbookService.getGuestbookDetail(detailId)
        .subscribe((guestbookDetail) => {
          this.guestbookDetail = guestbookDetail;
          console.log(this.guestbookService);
        });  }

  addClap(): void{
    const detailId = this.activatedRoute.snapshot.params[detailIdParam];
    const currentUrl = this.router.url;
    this.guestbookService.putClap(detailId, this.guestbookClaps).subscribe(
      // reload page after clap had been send
      () => this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
      }));
  }
}
