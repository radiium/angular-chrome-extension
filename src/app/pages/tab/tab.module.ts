import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { TabComponent } from './tab.component';
import { TabRoutingModule } from './tab-routing.module';

@NgModule({
    declarations: [
        TabComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        TabRoutingModule
    ]
})
export class TabModule { }
