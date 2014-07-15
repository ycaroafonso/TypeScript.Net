/// <reference path="../../Scripts/typings/requirejs/require.d.ts" />
/// <reference path='../../Scripts/TypeScript.Net/System/Collections/Generic/Dictionary.ts' />
/// <reference path='../../Scripts/typings/qunit/qunit.d.ts' />
define(["require", "exports"], function(require, exports) {
    require(["../../Scripts/TypeScript.Net/System/Collections/Generic/Dictionary"], function () {
        var pecas = new System.Collections.Generic.Dictionary();
        pecas.Add(13, "abc");
        pecas.Add(25, "def");

        QUnit.module('Dictionary<number, string>');

        test("Count()", function () {
            ok(pecas.Count() == 2, "Existem 2 itens");
            ok(pecas.Count() != 3, "Não existem 3 itens");
        });

        test("ContainsKey(value: TKey)", function () {
            ok(pecas.ContainsKey(13), "Contém a key 13.");
            ok(!pecas.ContainsKey(14), "Não contém a key 14.");
        });

        test("ContainsValue(value: TValue)", function () {
            ok(pecas.ContainsValue("abc"), "Contém o Value 'abc'.");
            ok(!pecas.ContainsValue("ddd"), "Não contém o Value 'ddd'.");
        });

        test("Remove(key: TKey)", function () {
            ok(pecas.Remove(13), "Removido a key 13");
            ok(pecas.Count() == 1, "Agora tem 1 item.");
        });

        test("GetByKey(key: TKey): TValue", function () {
            ok(pecas.GetByKey(25) == "def", "O item 25 é igual a 'def'.");
        });

        test("GetByIndex(index: number): TValue", function () {
            ok(pecas.GetByIndex(0) == "def", "O index 0 é def");
        });

        test("ToArray(): Array", function () {
            ok(pecas.ToArray().length == 1, "O array contém 1 item.");
        });

        test("GetIndexByKey(key: TKey): number", function () {
            ok(pecas.GetIndexByKey(25) == 0, "O index da key 25 agora é 0.");
        });

        var pecas2 = new System.Collections.Generic.Dictionary();
        pecas2.Add(13, new Oo("abc"));
        pecas2.Add(25, new Oo("def"));

        QUnit.module('Dictionary<number, Oo>');
        test("Count()", function () {
            ok(pecas2.Count() == 2, "Existem 2 itens");
            ok(pecas2.Count() != 3, "Não existem 3 itens");
        });

        test("ContainsKey(value: TKey)", function () {
            ok(pecas2.ContainsKey(13), "Contém a key 13.");
            ok(!pecas2.ContainsKey(14), "Não contém a key 14.");
        });

        //test("ContainsValue(value: TValue)", () => {
        //    ok(pecas2.ContainsValue("abc"), "Contém o Value 'abc'.");
        //    ok(!pecas2.ContainsValue("ddd"), "Não contém o Value 'ddd'.");
        //});
        test("Remove(key: TKey)", function () {
            ok(pecas2.Remove(13), "Removido a key 13");
            ok(pecas2.Count() == 1, "Agora tem 1 item.");
        });

        test("GetByKey(key: TKey): TValue", function () {
            ok(pecas2.GetByKey(25).getO() == "def", "O item 25 é igual a 'def'.");
        });

        test("GetByIndex(index: number): TValue", function () {
            ok(pecas2.GetByIndex(0).getO() == "def", "O index 0 é def");
        });

        test("ToArray(): Array", function () {
            ok(pecas2.ToArray().length == 1, "O array contém 1 item.");
        });

        test("GetIndexByKey(key: TKey): number", function () {
            ok(pecas2.GetIndexByKey(25) == 0, "O index da key 25 agora é 0.");
        });
    });

    var Oo = (function () {
        function Oo(o) {
            this._o = o;
        }
        Oo.prototype.getO = function () {
            return this._o.toString();
        };
        return Oo;
    })();
    exports.Oo = Oo;
});
//# sourceMappingURL=SystemCollectionsGenericDictionary.js.map
