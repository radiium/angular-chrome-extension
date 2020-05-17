import { Component, OnInit, Injector } from '@angular/core';
import { SettingsState, ThemeType } from '@models';
import { SettingsService } from '@core/services/settings.service';
import { BaseAbstract } from '@core/abstract/base.abstract';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent extends BaseAbstract implements OnInit {

    public settings: SettingsState;
    public themeType: typeof ThemeType = ThemeType;

    constructor(
        public injector: Injector,
        private settingsService: SettingsService
    ) {
        super(injector);
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.subs.settings = this.settingsService.$state.subscribe({
            next: (settings: SettingsState) => {
                this.settings = settings;
            }
        });
    }

    public selectTheme(theme: ThemeType): void {
        this.settingsService.setTheme(theme);
    }
}
