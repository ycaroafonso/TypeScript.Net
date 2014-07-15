/// <reference path="../../Scripts/typings/requirejs/require.d.ts" />
/// <reference path='../../Scripts/TypeScript.Net/System/Text/StringBuilder.ts' />

require.config({
    baseUrl: '../../Scripts/TypeScript.Net/',
});

require(["System/Text/StringBuilder"], () => {

    var str: System.Text.StringBuilder = new System.Text.StringBuilder();

    test("Append(value: string): IStringBuilder;", () => {
        ok(str.Append("abc"), "str.Append(\"abc\")");
    });

    test("AppendLine(value: string): IStringBuilder;", () => {
        ok(str.AppendLine("def"), "str.AppendLine(\"def\")");
    });

    test("Clear(): IStringBuilder;", () => {
        ok(str.Clear(), "");
        ok(str.ToString() == "", "str.ToString() == \"\"");
    });

    test("ToString(): string;", () => {
        ok(str.Append("abc"), "str.Append(\"abc\")");
        ok(str.ToString() == "abc", "str.ToString() == \"abc\ndef\"");
    });
});