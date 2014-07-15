/// <reference path="../../Scripts/typings/requirejs/require.d.ts" />
/// <reference path='../../Scripts/TypeScript.Net/System/Collections/Generic/List.ts' />
/// <reference path='../../Scripts/typings/qunit/qunit.d.ts' />
require(["../../Scripts/TypeScript.Net/System/Collections/Generic/List"], function () {
    var list = new System.Collections.Generic.List();
    list.Add("abc");
    list.Add("def");
    list.Add("ghi");
    list.Add("jkl");

    QUnit.module('List<string>()');

    test("Count(): number", function () {
        ok(list.Count() == 4, "Existem 2 itens");
        ok(list.Count() != 3, "Não existem 3 itens");
    });

    test("Clear(): void", function () {
        //ok(list.Clear(), "A List foi limpada.");
        list.Clear();
        ok(list.Count() == 0, "Existem 0 itens");
        ok(list.Count() != 3, "Não existem 3 itens");
    });

    test("Get(index: number): T", function () {
        list.Add("zzz");
        ok(list.Get(0), "Foi adicionado 1 item e esse item de index 0 é o 'zzz'.");
    });
});
