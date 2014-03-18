/// <reference path="../../Scripts/typings/requirejs/require.d.ts" />
/// <reference path='../../Scripts/TypeScript.Net/System/Random.ts' />
/// <reference path='../../Scripts/typings/qunit/qunit.d.ts' />
require.config({
    baseUrl: '../../Scripts/TypeScript.Net/'
});

require(["System/Random"], function () {
    test("new System.Random().Next(1, 10)", function () {
        for (var x = 0; x < 100; x++) {
            var random = new System.Random().Next(1, 10);
            ok(random >= 1 && random <= 10, "Teste " + x + " = " + random);
        }
    });
});
//# sourceMappingURL=SystemRandom.js.map
