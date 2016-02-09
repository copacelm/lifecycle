import {Directive, Input,
        OnInit, Ondestroy} from 'angular2/core';

import {LoggerService} from '../../services/logger.service';

let nextId = 1;

@Directive({
    selector : '[my-spy]'
})

export class Spy implements OnInit, Ondestroy {

    private  _id = nextId++;
    private _logger:LoggerService;

    constructor(logger:LoggerService) {
        this._logger = logger;
    }

    ngOnInit() {
        this._logIt('onInit');
    }

    ngOnDestory() {
        this._logIt('onDestroy');
    }

    private _logIt(msg:string) {
        this._logger.log(`Spy #${this._id} ${msg}`);
    }
}
