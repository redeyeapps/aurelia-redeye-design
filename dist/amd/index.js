define(["require", "exports", "./config-builder", "./exports"], function (require, exports, config_builder_1, exports_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia, configCallback) {
        var builder = aurelia.container.get(config_builder_1.ConfigBuilder);
        if (configCallback !== undefined && typeof (configCallback) === 'function') {
            configCallback(builder);
        }
        if (builder.useGlobalResources) {
            aurelia.globalResources(builder.globalResources);
        }
    }
    exports.configure = configure;
    // build-index-remove start
    __export(exports_1);
});
// build-index-remove end 
