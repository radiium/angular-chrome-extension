import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { OptionsService } from './services/options.service';
import { appInitializerFn } from './configs/app-initializer';

@NgModule({
    providers: [
        OptionsService,
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializerFn,
            deps: [
                Injector,
                OptionsService
            ],
            multi: true
        }
    ],
})
export class CoreModule { }
