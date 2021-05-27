import {Injectable} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {BehaviorSubject, Observable} from 'rxjs';
import {Layout} from './layout.model';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
    private readonly layoutSubject$ = new BehaviorSubject<Layout>(Layout.desktop);

    public get layout$(): Observable<Layout> {
        return this.layoutSubject$.asObservable();
    }

    constructor(breakpointObserver: BreakpointObserver) {
        breakpointObserver.observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
            Breakpoints.XLarge
        ]).subscribe(result => {
            if (result.breakpoints[Breakpoints.XSmall] || result.breakpoints[Breakpoints.Small]) {
                this.layoutSubject$.next(Layout.phone);
            } else if (result.breakpoints[Breakpoints.Medium]) {
                this.layoutSubject$.next(Layout.tablet);
            } else if (result.breakpoints[Breakpoints.Large] || result.breakpoints[Breakpoints.XLarge]) {
                this.layoutSubject$.next(Layout.desktop);
            }
        });
    }
}

