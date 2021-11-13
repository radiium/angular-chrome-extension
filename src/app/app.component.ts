import { Component, Injector } from '@angular/core';
import { SettingsService } from '@core/services/settings.service';
import { SettingsState } from '@models';
import { BaseAbstract } from '@core/abstract/base.abstract';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseAbstract {
    public loading = true;

    constructor(
        public override injector: Injector,
        private settingsService: SettingsService
    ) {
        super(injector);
        this.initApp();
    }

    private initApp(): void {
        this.subs.loading = this.loadingService.$state.subscribe((state: boolean) => {
            this.loading = state;
        });

        this.loadingService.show();
        this.settingsService.init().then((settings: SettingsState) => {
            this.loadingService.hide();
        });
    }
}
