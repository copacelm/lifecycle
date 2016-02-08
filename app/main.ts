import {bootstrap} from 'angular2/platform/browser';
import {DemoComponent} from './components/demo/demo.component';

bootstrap(DemoComponent).catch(err => console.error(err));
