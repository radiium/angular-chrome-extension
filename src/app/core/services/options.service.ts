import { Injectable } from "@angular/core";
import { BaseAbstract } from "@core/abstract/base.abstract";
import { defaultOptions, StorageKeys } from "@core/configs/constants";
import { Storage } from "@core/utils/storage";
import { Options, ThemeType } from "@models";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class OptionsService{

    private readonly state = new BehaviorSubject<Options>(defaultOptions);
    public readonly state$ = this.state.asObservable();

    constructor() {
    }

    public async init(): Promise<void> {
        return Storage.get(StorageKeys.OPTIONS).then((state: any) => {
            this.setState(state ?? defaultOptions)
        });
    }

    public setTheme(theme: ThemeType) {
        const state = this.getStateValue();
        state.theme = theme;
        this.applyTheme(theme);
        this.setState(state);
    }

    private getStateValue(): Options {
        return this.state.getValue();
    }

    private setState(state: Options): void {
        this.state.next(state);
        Storage.set(StorageKeys.OPTIONS, state);
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
