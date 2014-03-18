/// <reference path="../../Scripts/typings/requirejs/require.d.ts" />
/// <reference path='../../Scripts/TypeScript.Net/System/DateTime.ts' />
/// <reference path='../../Scripts/typings/qunit/qunit.d.ts' />


require.config({
    baseUrl: '../../Scripts/TypeScript.Net/',
});

require(["System/DateTime"], () => {
    var data = new System.DateTime(2013, 12, 17, 7, 52, 25, 120);

    QUnit.module('System.DateTime');
    test("Day(): number;", () => {
        ok(data.Day() == 17, "txt");
    });
    test("Hour(): number;", () => {
        ok(data.Hour() == 7, "txt");
    });
    test("Millisecond(): number;", () => {
        ok(data.Millisecond() == 120, "txt");
    });
    test("Minute(): number;", () => {
        ok(data.Minute() == 52, "txt");
    });
    test("Month(): number;", () => {
        ok(data.Month() == 12, "txt");
    });
    test("Now(): IDateTime;", () => {
        ok(System.DateTime.Now(), "txt");
    });
    test("Second(): number;", () => {
        ok(data.Second() == 25, "txt");
    });

    test("Year(): number;", () => {
        ok(data.Year() == 2013, "txt");
    });

    test("AddDays(value: number): IDateTime;", () => {
        ok(data.AddDays(1), "txt");
        ok(data.Day() == 18, "txt");
    });
    test("AddHours(value: number): IDateTime;", () => {
        ok(data.AddHours(1), "txt");
        ok(data.Hour() == 8, "txt");
    });

    test("AddMinutes(value: number): IDateTime;", () => {
        ok(data.AddMinutes(1), "txt");
        ok(data.Minute() == 53, "txt");
    });
    test("AddMonths(months: number): IDateTime;", () => {
        ok(data.AddMonths(1), "txt");
        ok(data.Month() == 1, "txt");
        ok(data.Year() == 2014, "txt");
    });
    test("AddSeconds(value: number): IDateTime;", () => {
        ok(data.AddSeconds(1), "txt");
        ok(data.Second() == 26, "txt");
    });

    test("AddYears(value: number): IDateTime;", () => {
        ok(data.AddYears(1), "txt");
        ok(data.Year() == 2015, "txt");
    });

    test("DaysInMonth(year: number, month: number): number;", () => {
        ok(System.DateTime.DaysInMonth(2013, 12) == 31, "txt");
    });

    test("ToString(format: string): string;", () => {
        ok(data.ToString(), "txt");
    });
});