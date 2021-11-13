import { Injector, OnInit, OnDestroy, Directive } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '@core/services/loading.service';

@Directive()
export class BaseAbstract implements OnInit, OnDestroy {

    protected loadingService: LoadingService;

    protected subs: { [key: string]: Subscription } = {};
    protected timeouts: { [key: string]: any } = {};

    constructor(public injector: Injector) {
        this.loadingService = this.injector.get(LoadingService);
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        Object.values(this.subs).forEach((sub: Subscription) => {
            if (!!sub && !!sub.unsubscribe) {
                sub.unsubscribe();
            }
        });
        Object.values(this.timeouts).forEach((timeout: any) => {
            if (!!timeout) {
                clearTimeout(timeout);
            }
        });
    }
}
