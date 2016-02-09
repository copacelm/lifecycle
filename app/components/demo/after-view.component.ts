import {
    Component, Input, Output,
    AfterContentInit, ContentChild,
    AfterViewChecked, AfterViewInit, ViewChild
} from 'angular2/core';

import {ChildComponent} from './child.component';
import {LoggerService} from '../../services/logger.service';

@Component({
    selector: 'after-view-parent',
    templateUrl: 'app/components/demo/templates/after-view.html',
    directives: [ChildComponent],
    providers: [LoggerService]
})

export class AfterViewParentComponent
    implements  AfterContentInit, AfterViewChecked, AfterViewInit{

    private _logger: LoggerService;
    hookLog: string[];
    hero = 'Marius';
    showChild = true;

    constructor(logger:LoggerService) {
        this._logger = logger;
        this.hookLog = logger.logs;
        logger.log('AfterView constructor: ' + this._getMessage());
    }

    @ContentChild(ChildComponent) contentChild: ChildComponent;

    @ViewChild(ChildComponent) viewChild: ChildComponent;

    private _getMessage(): string {
        let cmp = this.viewChild;
        return cmp ? `"${cmp.hero}" child view ` : `no child view`;
    }

    ngAfterContentInit() {
        this._logger.log(`AfterContentInit: There is ${this.contentChild ?  'a' : 'no'} content child`);
    }

    ngAfterViewInit() {
        this._logger.log(`AfterViewInit: ` + this._getMessage());
    }

    private _prevHero: string;
    ngAfterViewChecked() {
        if (!this.viewChild || this._prevHero === this.viewChild.hero) {return;}
        this._prevHero = this.viewChild.hero;
        this._logger.log('AfterViewChecked: ' + this._getMessage());
    }

}