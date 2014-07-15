/// <reference path="../../Scripts/typings/requirejs/require.d.ts" />
/// <reference path='../../Scripts/TypeScript.Net/System/DateTime.ts' />
/// <reference path='../../Scripts/typings/qunit/qunit.d.ts' />
require.config({
    baseUrl: '../../Scripts/TypeScript.Net/'
});

require(["System/DateTime"], function () {
    var data = new System.DateTime(2013, 12, 17, 7, 52, 25, 120);

    QUnit.module('System.DateTime');
    test("Day(): number;", function () {
        ok(data.Day() == 17, "txt");
    });
    test("Hour(): number;", function () {
        ok(data.Hour() == 7, "txt");
    });
    test("Millisecond(): number;", function () {
        ok(data.Millisecond() == 120, "txt");
    });
    test("Minute(): number;", function () {
        ok(data.Minute() == 52, "txt");
    });
    test("Month(): number;", function () {
        ok(data.Month() == 12, "txt");
    });
    test("Now(): IDateTime;", function () {
        ok(System.DateTime.Now(), "txt");
    });
    test("Second(): number;", function () {
        ok(data.Second() == 25, "txt");
    });

    test("Year(): number;", function () {
        ok(data.Year() == 2013, "txt");
    });

    test("AddDays(value: number): IDateTime;", function () {
        ok(data.AddDays(1), "txt");
        ok(data.Day() == 18, "txt");
    });
    test("AddHours(value: number): IDateTime;", function () {
        ok(data.AddHours(1), "txt");
        ok(data.Hour() == 8, "txt");
    });

    test("AddMinutes(value: number): IDateTime;", function () {
        ok(data.AddMinutes(1), "txt");
        ok(data.Minute() == 53, "txt");
    });
    test("AddMonths(months: number): IDateTime;", function () {
        ok(data.AddMonths(1), "txt");
        ok(data.Month() == 1, "txt");
        ok(data.Year() == 2014, "txt");
    });
    test("AddSeconds(value: number): IDateTime;", function () {
        ok(data.AddSeconds(1), "txt");
        ok(data.Second() == 26, "txt");
    });

    test("AddYears(value: number): IDateTime;", function () {
        ok(data.AddYears(1), "txt");
        ok(data.Year() == 2015, "txt");
    });

    test("DaysInMonth(year: number, month: number): number;", function () {
        ok(System.DateTime.DaysInMonth(2013, 12) == 31, "txt");
    });

    test("ToString(format: string): string;", function () {
        ok(data.ToString(), "txt");
    });
});
//# sourceMappingURL=SystemDateTime.js.map
