System.register(['angular2/core', './spy.directive', '../../services/logger.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, spy_directive_1, logger_service_1;
    var MyCounter, CounterParentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (spy_directive_1_1) {
                spy_directive_1 = spy_directive_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            MyCounter = (function () {
                function MyCounter() {
                    this.changeLog = [];
                }
                MyCounter.prototype.ngOnChanges = function (changes) {
                    if (this.counter === 0) {
                        this.changeLog.length = 0;
                    }
                    var prop = changes['counter'];
                    var cur = prop.currentValue;
                    var prev = JSON.stringify(prop.previousValue); // first time is {}; after is integer
                    this.changeLog.push("counter: currentValue = " + cur + ", previousValue = " + prev);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], MyCounter.prototype, "counter", void 0);
                MyCounter = __decorate([
                    core_1.Component({
                        selector: 'my-counter',
                        templateUrl: 'app/components/demo/templates/counter.html',
                        directives: [spy_directive_1.Spy]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyCounter);
                return MyCounter;
            })();
            exports_1("MyCounter", MyCounter);
            CounterParentComponent = (function () {
                function CounterParentComponent(logger) {
                    this.spyLog = [];
                    this._logger = logger;
                    this.spyLog = logger.logs;
                    this.reset();
                }
                CounterParentComponent.prototype.updateCounter = function () {
                    this.value += 1;
                };
                CounterParentComponent.prototype.reset = function () {
                    this._logger.log('-- reset --');
                    this.value = 0;
                };
                CounterParentComponent = __decorate([
                    core_1.Component({
                        selector: 'counter-parent',
                        templateUrl: 'app/components/demo/templates/counter-parent.html',
                        directives: [MyCounter],
                        providers: [logger_service_1.LoggerService]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], CounterParentComponent);
                return CounterParentComponent;
            })();
            exports_1("CounterParentComponent", CounterParentComponent);
        }
    }
});
//# sourceMappingURL=counter.component.js.map