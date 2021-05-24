import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GuestbookOverviewComponent} from './guestbook-overview/guestbook-overview.component';
import {GuestbookDetailComponent} from './guestbook-detail/guestbook-detail.component';
import {GuestbookDetailModule} from './guestbook-detail/guestbook-detail.module';
import {LoginComponent} from './login/login/login.component';
import {MakeGuestbookEntryComponent} from './make-guestbook-entry/make-guestbook-entry.component';
import {AuthGuard} from './shared/auth.guard';

const routes: Routes = [
  {path: 'overview', component: GuestbookOverviewComponent},
  {path: 'detail/:detailId', loadChildren: () => import('./guestbook-detail/guestbook-detail.module')
      .then(m => m.GuestbookDetailModule)},
  {path: 'login', component: LoginComponent},
  {path: 'newEntry', component: MakeGuestbookEntryComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'overview'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
