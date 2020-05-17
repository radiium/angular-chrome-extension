import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    protected readonly state: Subject<boolean> = new Subject<boolean>();
    public readonly $state: Observable<boolean> = this.state.asObservable();

    constructor() {
    }

    public show(): void {
        this.setState(true);
    }

    public hide(): void {
        this.setState(false);
    }

    private setState(state: boolean) {
        this.state.next(state);
    }
}
