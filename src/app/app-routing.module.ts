import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GuestbookOverviewComponent} from './guestbook-overview/guestbook-overview.component';
import {LoginComponent} from './login/login/login.component';
import {MakeGuestbookEntryComponent} from './make-guestbook-entry/make-guestbook-entry.component';
import {UserListComponent} from './user-list/user-list.component';
import {AuthGuard} from './shared/auth.guard';

const routes: Routes = [
  {path: 'overview', component: GuestbookOverviewComponent},
  {path: 'detail/:detailId', loadChildren: () => import('./guestbook-detail/guestbook-detail.module')
      .then(m => m.GuestbookDetailModule)},
  {path: 'login', component: LoginComponent},
  {path: 'newEntry', component: MakeGuestbookEntryComponent, canActivate: [AuthGuard]},
  {path: 'userList', component: UserListComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'overview'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
