/// <reference path="../../Scripts/typings/requirejs/require.d.ts" />
/// <reference path='../../Scripts/TypeScript.Net/System/Convert.ts' />
/// <reference path='../../Scripts/TypeScript.Net/System/MathTs.ts' />
/// <reference path='../../Scripts/typings/qunit/qunit.d.ts' />
require.config({
    baseUrl: '../../Scripts/TypeScript.Net/'
});

require(["System/MathTs", "System/Convert"], function () {
    QUnit.module('System.MathTs');
    test("Floor(d: number): number;", function () {
        ok(System.MathTs.Floor(0.60) == 0, "System.MathTs.Floor(0.60) == 0");
        ok(System.MathTs.Floor(0.40) == 0, "System.MathTs.Floor(0.40) == 0");
        ok(System.MathTs.Floor(5) == 5, "System.MathTs.Floor.floor(5) == 5");
        ok(System.MathTs.Floor(5.1) == 5, "System.MathTs.Floor(5.1) == 5");
        ok(System.MathTs.Floor(-5.1) == -6, "System.MathTs.Floor(-5.1) == -6");
        ok(System.MathTs.Floor(-5.9) == -6, "System.MathTs.Floor(-5.9) == -6");
    });
    test("Pow(x: number, y: number): number;", function () {
        ok(System.MathTs.Pow(2, 2) == 4, "System.MathTs.Pow(2, 2) == 4");
        ok(System.MathTs.Pow(2, 3) == 8, "System.MathTs.Pow(2, 2) == 4");
    });
    test("Round(d: number, decimals: number): number;", function () {
        ok(System.MathTs.Round(123.4567, 2) == 123.46, "System.MathTs.Round(123.4567, 2) == 123.46");
        ok(System.MathTs.Round(123.4523, 2) == 123.45, "System.MathTs.Round(123.4523, 2) == 123.45");
    });
});
//# sourceMappingURL=SystemMath.js.map
