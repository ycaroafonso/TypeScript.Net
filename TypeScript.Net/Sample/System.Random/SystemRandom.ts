/// <reference path="../../Scripts/typings/requirejs/require.d.ts" />
/// <reference path='../../Scripts/TypeScript.Net/System/Random.ts' />
/// <reference path='../../Scripts/typings/qunit/qunit.d.ts' />

require.config({
    baseUrl: '../../Scripts/TypeScript.Net/',
});

require(["System/Random"], () => {
    test("new System.Random().Next(1, 10)", () => {
        for (var x: number = 0; x < 100; x++) {
            var random: number = new System.Random().Next(1, 10);
            ok(random >= 1 && random <= 10, "Teste " + x + " = " + random);
        }
    });
});