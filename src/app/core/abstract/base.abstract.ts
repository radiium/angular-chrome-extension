import { OnDestroy, Directive } from '@angular/core';
import { AppInjector } from '@core/configs/app-injector';
import { OptionsService } from '@core/services/options.service';
import { Subscription } from 'rxjs';

@Directive()
export class BaseAbstract implements OnDestroy {

    protected subs: { [key: string]: Subscription } = {};
    protected timeouts: { [key: string]: any } = {};
    protected optionsService: OptionsService;

    constructor() {
        this.optionsService = AppInjector.injector.get(OptionsService);
    }

    ngOnDestroy(): void {
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

    openOptionsPage(): void {
        chrome.runtime.openOptionsPage(() => {
            console.log('Option page opened')
        });
    }
}
