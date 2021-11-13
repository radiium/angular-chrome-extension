import { Directive, Injector } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { BrowserAPIService } from '@core/browser-api/browser-api.service';

@Directive()
export abstract class AbstractStore<T> {

    protected browserAPIService: BrowserAPIService;

    protected readonly STORAGE_KEY: string;
    protected readonly DEFAULT_STATE: T;

    protected readonly state: BehaviorSubject<T>;
    public readonly $state: Observable<T>;

    constructor(public injector: Injector) {
        this.browserAPIService = this.injector.get(BrowserAPIService);

        this.state = new BehaviorSubject<T>(this.DEFAULT_STATE);
        this.$state = this.state.asObservable();
    }

    public async init(): Promise<T> {
        console.log(`[${this.constructor.name}] init store`);
        return this.browserAPIService.getItemStorage(this.STORAGE_KEY)
            .then((state: T) => (!!state ? state : this.DEFAULT_STATE));
    }

    protected getState(): T {
        const state = this.state.getValue();
        return !!state ? state : this.DEFAULT_STATE;
    }

    protected setState(state: T): void {
        this.browserAPIService.setItemStorage(this.STORAGE_KEY, state);
        this.state.next(state);
    }
}
