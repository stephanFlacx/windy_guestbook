import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GuestbookOverviewComponent} from './guestbook-overview/guestbook-overview.component';
import {GuestbookDetailComponent} from './guestbook-detail/guestbook-detail.component';

const routes: Routes = [
  {path: 'overview', component: GuestbookOverviewComponent},
  {path: 'detail/:myid', component: GuestbookDetailComponent},
  {path: '**', redirectTo: 'overview'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
