import {Component} from 'angular2/core';
import {AfterContentComponent, AfterContentParentComponent} from './after-content.component';
import {AfterViewParentComponent} from './after-view.component';
import {CounterParentComponent, MyCounter} from './counter.component';

@Component({
    selector : 'my-app',
    templateUrl : 'app/components/demo/templates/demo.html',
    directives: [AfterContentParentComponent, AfterContentComponent, AfterViewParentComponent, CounterParentComponent]
})

export class DemoComponent {

}
