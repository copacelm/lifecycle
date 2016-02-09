import {
    Component, Input, Output,
    OnChanges, SimpleChange,
} from 'angular2/core';

import {Spy} from './spy.directive';
import {LoggerService}  from '../../services/logger.service';

@Component({
    selector: 'my-counter',
    templateUrl: 'app/components/demo/templates/counter.html',
    directives:[Spy]
})

export class MyCounter implements OnChanges {
    @Input() counter: number;
    changeLog:string[] = [];

    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {

        if (this.counter === 0) {
            this.changeLog.length = 0;
        }

        let prop = changes['counter'];
        let cur = prop.currentValue;
        let prev = JSON.stringify(prop.previousValue); // first time is {}; after is integer
        this.changeLog.push(`counter: currentValue = ${cur}, previousValue = ${prev}`);
    }

}


@Component({
    selector : 'counter-parent',
    templateUrl: 'app/components/demo/templates/counter-parent.html',
    directives: [MyCounter],
    providers: [LoggerService]
})

export class CounterParentComponent {
    value : number;
    spyLog: string[] = [];

    private _logger: LoggerService;

    constructor(logger:LoggerService) {
        this._logger = logger;
        this.spyLog = logger.logs;
        this.reset();
    }

    updateCounter() {
        this.value +=1;
    }

    reset() {
        this._logger.log('-- reset --');
        this.value = 0;
    }


}