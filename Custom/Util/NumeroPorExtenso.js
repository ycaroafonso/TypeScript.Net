/// <reference path="../../../typings/requirejs/require.d.ts" />
/// <reference path='../../System/Collections/Generic/Dictionary.ts' />
/// <reference path='../../System/Convert.ts' />
/// <reference path='../../System/MathTs.ts' />
/// <reference path='../../Custom/String.ts' />
/// <reference path='../../../typings/qunit/qunit.d.ts' />
var Custom;
(function (Custom) {
    (function (Util) {
        var NumeroPorExtenso = (function () {
            function NumeroPorExtenso() {
            }
            NumeroPorExtenso.prototype.getNumero = function () {
                return this._numero;
            };
            NumeroPorExtenso.prototype.setNumero = function (input) {
                this._numero = input;
            };

            NumeroPorExtenso.prototype.GetNomeNumero = function () {
                if (this._NomeNumero == null) {
                    var arr = [
                        [1, 'Um'],
                        [2, 'Dois'],
                        [3, 'Tres'],
                        [4, 'Quatro'],
                        [5, 'Cinco'],
                        [6, 'Seis'],
                        [7, 'Sete'],
                        [8, 'Oito'],
                        [9, 'Nove'],
                        [10, 'Dez'],
                        [11, 'Onze'],
                        [12, 'Doze'],
                        [13, 'Treze'],
                        [14, 'Quartorze'],
                        [15, 'Quinze'],
                        [16, 'Dezesseis'],
                        [17, 'Dezesete'],
                        [18, 'Dezoito'],
                        [19, 'Dezenove'],
                        [20, 'Vinte'],
                        [30, 'Trinta'],
                        [40, 'Quarenta'],
                        [50, 'Cinquenta'],
                        [60, 'Sessenta'],
                        [70, 'Setenta'],
                        [80, 'Oitenta'],
                        [90, 'Noventa'],
                        [100, 'Cento'],
                        [200, 'Duzentos'],
                        [300, 'Trezentos'],
                        [400, 'Quatrocentos'],
                        [500, 'Quinhentos'],
                        [600, 'Seiscentos'],
                        [700, 'Setecentos'],
                        [800, 'Oitocentos'],
                        [900, 'Novecentos'],
                        [1000, 'Mil'],
                        [1000000, 'Milhões'],
                        [1000000000, 'Bilhões'],
                        [1000000000000, 'Trilhões']
                    ];
                    this._NomeNumero = System.Collections.Generic.Dictionary.ToDictionary(arr, 0, 1);
                }
                return this._NomeNumero;
            };

            NumeroPorExtenso.prototype.SeparaNumero = function (input) {
                var o = input.toString().split("").reverse().join("");
                var arr = o.match(/\d{1,3}/gi);
                for (var x = 0; x < arr.length; x++)
                    arr[x] = arr[x].split("").reverse().join("");
                return arr;
            };

            NumeroPorExtenso.prototype.Calcula = function (input) {
                if (typeof input === "undefined") { input = this.getNumero(); }
                switch (input) {
                    case 0:
                        return "Zero";
                    case null:
                        return "Vazio";
                    default:
                        var arr = this.SeparaNumero(input);
                        var ret = "";

                        for (var i = arr.length - 1; i >= 0; i--) {
                            var res = System.Convert.ToInt32(arr[i]);

                            if (this.GetNomeNumero().ContainsKey(res)) {
                                ret += this.GetNomeNumero().GetByKey(res) + " e ";
                            } else {
                                var n = (arr[i].toString()).split("").reverse();
                                for (var x = n.length - 1; x >= 0; x--) {
                                    if (this.GetNomeNumero().ContainsKey(res)) {
                                        ret += this.GetNomeNumero().GetByKey(res) + " e ";
                                        break;
                                    } else {
                                        var fatorG = System.MathTs.Pow(10, x);
                                        var numeroG = fatorG * n[x];

                                        if (this.GetNomeNumero().ContainsKey(numeroG)) {
                                            ret += this.GetNomeNumero().GetByKey(numeroG) + " e ";
                                            res = res - numeroG;
                                        }
                                    }
                                }
                            }
                            var fator = System.Convert.ToInt32("1".PadRight((i * 3) + 1, "0"));
                            if (arr[i].toString() != "000" && fator >= 1000)
                                ret = ret.replace(/ e $/i, " ") + this.GetNomeNumero().GetByKey(fator) + ", ";
                        }
                        return ret.replace(/( e |, )$/gi, "").replace(/, (\w+)$/gi, " e $1");
                }
            };
            return NumeroPorExtenso;
        })();
        Util.NumeroPorExtenso = NumeroPorExtenso;
    })(Custom.Util || (Custom.Util = {}));
    var Util = Custom.Util;
})(Custom || (Custom = {}));
//# sourceMappingURL=NumeroPorExtenso.js.map
