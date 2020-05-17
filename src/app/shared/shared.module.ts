import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';
import { PIPES } from './pipes';

@NgModule({
    declarations: [
        ...COMPONENTS,
        ...DIRECTIVES,
        ...PIPES,
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ...COMPONENTS,
        ...DIRECTIVES,
        ...PIPES
    ]
})
export class SharedModule { }
