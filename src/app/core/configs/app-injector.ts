import { Injector } from '@angular/core';

export class AppInjector {

    static injector: Injector;

    static set(injector: Injector) {
        AppInjector.injector = injector;
    }
}
