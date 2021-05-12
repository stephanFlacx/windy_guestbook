import {Component, OnInit} from '@angular/core';
import {GlobalLoadingService} from './services/global-loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'windy-guestbook';

    constructor(public readonly globalLoadingService: GlobalLoadingService) {
    }
}
