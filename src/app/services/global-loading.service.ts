import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GlobalLoadingService {
    private readonly isLoadingSubject = new BehaviorSubject<boolean>(false);

    public get isLoading$(): Observable<boolean> {
        return this.isLoadingSubject.asObservable();
    }

    public set isLoading(newValue: boolean) {
        this.isLoadingSubject.next(newValue);
    }
}
