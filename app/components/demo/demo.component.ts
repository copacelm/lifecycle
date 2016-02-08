import {Component} from 'angular2/core';
import {AfterContentComponent, AfterContentParentComponent} from './after-content.component';

@Component({
    selector : 'my-app',
    templateUrl : 'app/components/demo/templates/demo.html',
    directives: [AfterContentParentComponent, AfterContentComponent]
})

export class DemoComponent {

}
