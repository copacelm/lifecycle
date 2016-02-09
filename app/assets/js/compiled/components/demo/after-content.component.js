System.register(['angular2/core', './child.component', '../../services/logger.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, child_component_1, logger_service_1;
    var AfterContentComponent, AfterContentParentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (child_component_1_1) {
                child_component_1 = child_component_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            AfterContentComponent = (function () {
                function AfterContentComponent(logger) {
                    this._logger = logger;
                    logger.log('AfterContent constructor: ' + this._getMessage());
                }
                AfterContentComponent.prototype.ngAfterContentChecked = function () {
                    if (!this.contentChild || this._prevHero === this.contentChild.hero) {
                        return;
                    }
                    this._prevHero = this.contentChild.hero;
                    this._logger.log('AfterContentChecked: ' + this._getMessage());
                };
                AfterContentComponent.prototype.ngAfterContentInit = function () {
                    this._logger.log('AfterContentInit: ' + this._getMessage());
                };
                AfterContentComponent.prototype.ngAfterViewInit = function () {
                    this._logger.log("AfterViewInit: There is " + (this.viewChild ? 'a' : 'no') + " view child");
                };
                AfterContentComponent.prototype._getMessage = function () {
                    var cmp = this.contentChild;
                    return cmp ? "\"" + cmp.hero + "\" child content" : "no child content";
                };
                __decorate([
                    core_1.ContentChild(child_component_1.ChildComponent), 
                    __metadata('design:type', child_component_1.ChildComponent)
                ], AfterContentComponent.prototype, "contentChild", void 0);
                __decorate([
                    core_1.ViewChild(child_component_1.ChildComponent), 
                    __metadata('design:type', child_component_1.ChildComponent)
                ], AfterContentComponent.prototype, "viewChild", void 0);
                AfterContentComponent = __decorate([
                    core_1.Component({
                        selector: 'after-content',
                        templateUrl: 'app/components/demo/templates/after-content.html',
                        providers: [logger_service_1.LoggerService]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], AfterContentComponent);
                return AfterContentComponent;
            })();
            exports_1("AfterContentComponent", AfterContentComponent);
            AfterContentParentComponent = (function () {
                function AfterContentParentComponent(logger) {
                    this.showChild = true;
                    this.hookLang = logger.logs;
                }
                AfterContentParentComponent = __decorate([
                    core_1.Component({
                        selector: 'after-content-parent',
                        templateUrl: 'app/components/demo/templates/after-content-parent.html',
                        directives: [AfterContentComponent, child_component_1.ChildComponent],
                        providers: [logger_service_1.LoggerService]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], AfterContentParentComponent);
                return AfterContentParentComponent;
            })();
            exports_1("AfterContentParentComponent", AfterContentParentComponent);
        }
    }
});
//# sourceMappingURL=after-content.component.js.map