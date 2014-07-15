/// <reference path="../../Scripts/typings/requirejs/require.d.ts" />
/// <reference path="../../Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../Scripts/TypeScript.Net/System/Collections/Generic/List.ts" />
/// <reference path="PecasArray.ts" />
require.config({
    baseUrl: '../../Scripts/TypeScript.Net/',
    shim: {
        "jquery": {
            exports: "$"
        }
    },
    paths: {
        jquery: "../jquery-2.0.3.min"
    }
});

var main;
require([
    "jquery",
    "../../Sample/J/PecasArray",
    "System/Text/StringBuilder",
    "System/Collections/Generic/List",
    "System/Random"], function ($, a, b, c, d) {
    $(document).ready(function () {
        main = new J.Main();
        main.NovaPeca();

        $("#jogo td").click(function () {
            if ($(this).attr("c") == 1)
                $(this).css({ "background": "" }).removeAttr("c");
            else
                main.Marcar($(this));
        });
    });
});

var J;
(function (J) {
    var Main = (function () {
        function Main() {
            this._pecasArray = new J.PecasArray();
        }
        Main.prototype.NovaPeca = function () {
            $("#bloco td").css({ "background": "" });
            this._peca = this._pecasArray.NovaPeca();
            this._peca.forEach(function (item) {
                $("#bloco tr:eq(" + item[0] + ") td:eq(" + item[1] + ")").css({ "background": "blue" });
            });
        };

        Main.prototype.Marcar = function (obj) {
            obj.css({ "background": "blue" }).attr("c", "1");
            this.VerificaPeca(obj);
        };

        Main.prototype.VerificaPeca = function (objClicado) {
            var qtdeMarcados = $("#jogo td[c=1]").length;

            var x1 = -1;
            var y1 = -1;
            var isLimpa = true;

            if (qtdeMarcados <= 4)
                $("#jogo td[c=1]").each(function (index, obj) {
                    if (x1 == -1) {
                        x1 = $(obj).parent().index();
                        y1 = $(obj).index();
                    }
                    var xA = $(obj).parent().index() - x1;
                    var yA = $(obj).index() - y1;

                    for (var i = 0; i < this._peca.length; i++) {
                        if (this._peca[i][0] == xA && this._peca[i][1] == yA) {
                            isLimpa = false;
                            break;
                        }
                    }
                });
            if (isLimpa) {
                this.LimparPeca();
                this.Marcar(objClicado);
            }
        };

        Main.prototype.LimparPeca = function () {
            $("#jogo td[c=1]").css({ background: "" }).removeAttr("c");
        };
        return Main;
    })();
    J.Main = Main;
})(J || (J = {}));
//# sourceMappingURL=j.js.map
