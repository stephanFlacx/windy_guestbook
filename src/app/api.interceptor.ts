import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {GlobalLoadingService} from './services/global-loading.service';
import {finalize} from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private readonly globalLoadingService: GlobalLoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith('http')) {
        return next.handle(request);
    }

    setTimeout(() => this.globalLoadingService.isLoading = true);
    return next.handle(request.clone({url: 'http://localhost:8080/' + request.url})).pipe(
            finalize(() => setTimeout(() => this.globalLoadingService.isLoading = false))
        );
  }
}

