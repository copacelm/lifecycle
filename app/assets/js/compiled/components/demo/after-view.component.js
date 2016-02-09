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
    var AfterViewParentComponent;
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
            AfterViewParentComponent = (function () {
                function AfterViewParentComponent(logger) {
                    this.hero = 'Marius';
                    this.showChild = true;
                    this._logger = logger;
                    this.hookLog = logger.logs;
                    logger.log('AfterView constructor: ' + this._getMessage());
                }
                AfterViewParentComponent.prototype._getMessage = function () {
                    var cmp = this.viewChild;
                    return cmp ? "\"" + cmp.hero + "\" child view " : "no child view";
                };
                AfterViewParentComponent.prototype.ngAfterContentInit = function () {
                    this._logger.log("AfterContentInit: There is " + (this.contentChild ? 'a' : 'no') + " content child");
                };
                AfterViewParentComponent.prototype.ngAfterViewInit = function () {
                    this._logger.log("AfterViewInit: " + this._getMessage());
                };
                AfterViewParentComponent.prototype.ngAfterViewChecked = function () {
                    if (!this.viewChild || this._prevHero === this.viewChild.hero) {
                        return;
                    }
                    this._prevHero = this.viewChild.hero;
                    this._logger.log('AfterViewChecked: ' + this._getMessage());
                };
                __decorate([
                    core_1.ContentChild(child_component_1.ChildComponent), 
                    __metadata('design:type', child_component_1.ChildComponent)
                ], AfterViewParentComponent.prototype, "contentChild", void 0);
                __decorate([
                    core_1.ViewChild(child_component_1.ChildComponent), 
                    __metadata('design:type', child_component_1.ChildComponent)
                ], AfterViewParentComponent.prototype, "viewChild", void 0);
                AfterViewParentComponent = __decorate([
                    core_1.Component({
                        selector: 'after-view-parent',
                        templateUrl: 'app/components/demo/templates/after-view.html',
                        directives: [child_component_1.ChildComponent],
                        providers: [logger_service_1.LoggerService]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], AfterViewParentComponent);
                return AfterViewParentComponent;
            })();
            exports_1("AfterViewParentComponent", AfterViewParentComponent);
        }
    }
});
//# sourceMappingURL=after-view.component.js.map