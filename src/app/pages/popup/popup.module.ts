import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { PopupComponent } from './popup.component';
import { PopupRoutingModule } from './popup-routing.module';

@NgModule({
    declarations: [
        PopupComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PopupRoutingModule
    ]
})
export class PopupModule { }
