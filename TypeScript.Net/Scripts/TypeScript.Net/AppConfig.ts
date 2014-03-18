/// <reference path="../typings/requirejs/require.d.ts" />

require.config({
    baseUrl: '../../TypeScript.Net/',
    paths: {
        'System.Convert': 'System/Convert',
        'System.Math': 'System/Math',
    }/*,
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        console: {
            exports: "console"
        }
    }*/
});