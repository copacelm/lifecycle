import {Component, Input} from 'angular2/core';

@Component({
    selector : 'my-div',
    templateUrl : 'app/components/demo/templates/child.html'
})

export class ChildComponent{
    @Input() hero: string;
}