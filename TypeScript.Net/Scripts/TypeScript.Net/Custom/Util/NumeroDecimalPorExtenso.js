/// <reference path='NumeroPorExtenso.ts' />
/// <reference path='../../System/Text/StringBuilder.ts' />
/// <reference path='../../System/Convert.ts' />

var Custom;
(function (Custom) {
    (function (Util) {
        var NumeroDecimalPorExtenso = (function () {
            function NumeroDecimalPorExtenso() {
            }
            NumeroDecimalPorExtenso.prototype.getNumero = function () {
                return this._numero;
            };
            NumeroDecimalPorExtenso.prototype.setNumero = function (input) {
                this._numero = input;
            };

            NumeroDecimalPorExtenso.prototype.Calcula = function (input, textoInteiro, textoDecimal) {
                if (typeof input === "undefined") { input = this.getNumero(); }
                if (typeof textoInteiro === "undefined") { textoInteiro = ["Real", "Reais"]; }
                if (typeof textoDecimal === "undefined") { textoDecimal = ["Centavo", "Centavos"]; }
                if (input.toString() == "") {
                    return "Vazio";
                } else {
                    var v = input.toString().split('.');
                    var nInt;
                    var nDec = 0;
                    if (v.length > 0) {
                        nInt = System.Convert.ToInt32(v[0]);
                        nDec = System.Convert.ToDecimal(v[1]);
                    } else {
                        nInt = input;
                    }

                    var ret = new System.Text.StringBuilder();
                    var numeroPorExtenso = new Custom.Util.NumeroPorExtenso();

                    ret.Append(numeroPorExtenso.Calcula(nInt));
                    ret.Append(" ");
                    ret.Append((nInt > 1 ? textoInteiro[1] : textoInteiro[0]));

                    if (nDec > 0) {
                        ret.Append(" e ");
                        ret.Append(numeroPorExtenso.Calcula(nDec));
                        ret.Append(" ");
                        ret.Append((nDec > 1 ? textoDecimal[1] : textoDecimal[0]));
                    }
                    return ret.ToString();
                }
            };
            return NumeroDecimalPorExtenso;
        })();
        Util.NumeroDecimalPorExtenso = NumeroDecimalPorExtenso;
    })(Custom.Util || (Custom.Util = {}));
    var Util = Custom.Util;
})(Custom || (Custom = {}));
//# sourceMappingURL=NumeroDecimalPorExtenso.js.map
