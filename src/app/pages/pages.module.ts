import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home/home-page.component';
import { SettingsPageComponent } from './settings/settings-page.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
    declarations: [
        HomePageComponent,
        SettingsPageComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class PagesModule { }
