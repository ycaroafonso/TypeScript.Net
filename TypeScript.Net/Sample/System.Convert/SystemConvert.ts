/// <reference path="../../Scripts/typings/requirejs/require.d.ts" />
/// <reference path='../../Scripts/TypeScript.Net/System/Convert.ts' />
/// <reference path='../../Scripts/typings/qunit/qunit.d.ts' />

require.config({
    baseUrl: '../../Scripts/TypeScript.Net/',
});

require(["System/Convert"], () => {

    QUnit.module('System.Convert');
    test("ToInt32(value: string): number;", () => {
        ok(System.Convert.ToInt32("123") == 123, "Convertido '123' para int32.");
    });

    test("ToBoolean(value: string): boolean;", () => {
        ok(System.Convert.ToBoolean("true"), "Convertido 'true' para true.");
        ok(System.Convert.ToBoolean("1"), "Convertido '1' para true.");

        ok(!System.Convert.ToBoolean("false"), "Convertido 'false' para false.");
        ok(!System.Convert.ToBoolean("0"), "Convertido '0' para false.");
        ok(!System.Convert.ToBoolean(""), "Convertido '' para false.");
        ok(!System.Convert.ToBoolean(null), "Convertido NULL para false.");
    });

    test("ToDecimal(value: string): number;", () => {
        ok(System.Convert.ToDecimal("0,10") == 0.1, "Convertido '0,10' para 0.1");
        ok(System.Convert.ToDecimal("123.456,78") == 123456.78, "Convertido '123.456,78' para 123456.78");
        ok(System.Convert.ToDecimal("123456,78") == 123456.78, "Convertido '123456,78' para 123456.78");
    });

});
