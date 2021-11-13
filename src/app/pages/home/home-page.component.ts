import { Component, OnInit, Injector } from '@angular/core';
import { BaseAbstract } from '@core/abstract/base.abstract';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends BaseAbstract implements OnInit {

    constructor(public override injector: Injector) {
        super(injector);
    }

    override ngOnInit(): void {
        super.ngOnInit();
    }
}
