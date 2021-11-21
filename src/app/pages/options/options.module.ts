import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { OptionsComponent } from './options.component';
import { OptionsRoutingModule } from './options-routing.module';

@NgModule({
    declarations: [
        OptionsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        OptionsRoutingModule
    ]
})
export class OptionsModule { }
