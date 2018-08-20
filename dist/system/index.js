System.register(["./config-builder", "./exports"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia, configCallback) {
        var builder = aurelia.container.get(config_builder_1.ConfigBuilder);
        if (configCallback !== undefined && typeof (configCallback) === 'function') {
            configCallback(builder);
        }
        if (builder.useGlobalResources) {
            aurelia.globalResources(builder.globalResources);
        }
    }
    exports_1("configure", configure);
    var config_builder_1;
    var exportedNames_1 = {
        "configure": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (config_builder_1_1) {
                config_builder_1 = config_builder_1_1;
            },
            function (exports_2_1) {
                exportStar_1(exports_2_1);
            }
        ],
        execute: function () {
            // build-index-remove end
        }
    };
});
