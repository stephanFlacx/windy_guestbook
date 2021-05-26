import { Component } from '@angular/core';
import {GlobalLoadingService} from '../../services/global-loading.service';
import {Router} from '@angular/router';
import {User} from '../../models/user.model';
import {AuthenticationService} from '../../services/authentication.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   public isRegistered = true;

    public user: User = {
        username: '',
        password: ''
    };

    public globalError: string | undefined;

    constructor(
        private readonly authService: AuthenticationService,
        private readonly router: Router,
        private readonly globalLoadingService: GlobalLoadingService
    ) {
    }

    public onFormSubmit(): void {
        this.globalLoadingService.isLoading = true;
        this.authService.login(this.user)
            .pipe(
                finalize(() => this.globalLoadingService.isLoading = false)
            )
            .subscribe(() => {
                this.router.navigate(['/']);
            }, () => {
                this.globalError = 'We couldn’t find an account matching the username and password you entered. Please check your username and password and try again.';
            });
    }
}
