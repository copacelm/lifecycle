import {
    Component, Input, Output,
    AfterContentChecked, AfterContentInit, ContentChild,
    AfterViewInit, ViewChild
} from 'angular2/core';

import {ChildComponent} from './child.component';
import {LoggerService} from '../../services/logger.service';

@Component({
    selector : 'after-content',
    templateUrl: 'app/components/demo/templates/after-content.html',
    providers: [LoggerService]
})

export class AfterContentComponent implements AfterContentChecked, AfterContentInit, AfterViewInit{

    private _logger : LoggerService;
    private _prevHero:string;

    constructor(logger:LoggerService) {
        this._logger = logger;

        logger.log('After constructor after-content: ' + this._getMessage());
    }

    @ContentChild(ChildComponent) contentChild: ChildComponent;

    @ViewChild(ChildComponent) viewChild: ChildComponent;


    ngAfterContentChecked() {
        if (!this.contentChild || this._prevHero === this.contentChild.hero) { return; }
        this._prevHero = this.contentChild.hero;
        this._logger.log('AfterContentChecked: ' + this._getMessage());
    }

    ngAfterContentInit() {
        this._logger.log('AfterContentInit: ' + this._getMessage());
    }

    ngAfterViewInit() {
        this._logger.log(`AfterViewInit: There is ${this.viewChild ? 'a' : 'no'} view child`);
    }

    private _getMessage() : string {
        let cmp = this.contentChild;
        return cmp ? `"${cmp.hero}" child content` : `no child content`;
    }
}


@Component({
    selector : 'after-content-parent',
    templateUrl : 'app/components/demo/templates/after-content-parent.html',
    directives: [AfterContentComponent, ChildComponent],
    providers: [LoggerService]
})

export class AfterContentParentComponent{

    hookLang : string[];
    hero : string;
    showChild = true;

    constructor(logger:LoggerService){
        this.hookLang = logger.logs;
    }
}