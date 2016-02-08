System.register(['angular2/platform/browser', './components/demo/demo.component'], function(exports_1) {
    var browser_1, demo_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (demo_component_1_1) {
                demo_component_1 = demo_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(demo_component_1.DemoComponent).catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=main.js.map