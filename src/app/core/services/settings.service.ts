import { Injectable, Injector } from '@angular/core';
import { SettingsState, ThemeType } from '@models';
import { AbstractStore } from '@core/abstract/store.abstract';

@Injectable({
    providedIn: 'root'
})
export class SettingsService extends AbstractStore<SettingsState> {

    protected override readonly STORAGE_KEY: string = 'settings';
    protected override readonly DEFAULT_STATE: SettingsState = {
        theme: ThemeType.DARK,
    };

    constructor(public override injector: Injector) {
        super(injector);
    }

    public override async init(): Promise<SettingsState> {
        return super.init().then((state: SettingsState) => {
            this.setState(state);
            this.applyTheme(state.theme);
            return state;
        });
    }

    public setTheme(theme: ThemeType) {
        const state = this.getState();
        state.theme = theme;
        this.setState(state);
        this.applyTheme(state.theme);
    }

    private applyTheme(currentTheme: ThemeType) {
        Object.values(ThemeType).forEach((theme: ThemeType) => {
            const themeClass = this.buildThemeClass(theme);
            if (document.body.classList.contains(themeClass)) {
                document.body.classList.remove(themeClass);
            }
        });
        const currentThemeClass = this.buildThemeClass(currentTheme);
        document.body.classList.add(currentThemeClass);
    }

    private buildThemeClass(theme: ThemeType) {
        return `${theme.toLowerCase()}-theme`;
    }
}
