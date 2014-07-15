/// <reference path="../../Scripts/typings/requirejs/require.d.ts" />
/// <reference path='../../Scripts/TypeScript.Net/Custom/Util/NumeroPorExtenso.ts' />
/// <reference path='../../Scripts/typings/qunit/qunit.d.ts' />

require.config({
    baseUrl: '../../Scripts/TypeScript.Net/',
});

function Numero_Change(obj) {
    require(["System/Collections/Generic/Dictionary", "System/MathTs", "System/Convert", "System/Text/StringBuilder"
        , "Custom/String", "Custom/Util/NumeroPorExtenso"
        , "../jquery-2.0.3.min"], () => {

            var x = new Custom.Util.NumeroPorExtenso();
            document.getElementById("res").innerHTML = x.Calcula(obj.value);
        });
}

