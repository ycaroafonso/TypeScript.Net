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
    },
});

var main: J.Main;
require(["jquery"
    , "../../Sample/J/PecasArray"
    , "System/Text/StringBuilder"
    , "System/Collections/Generic/List"
    , "System/Random"], ($, a, b, c, d) => {

        $(document).ready(() => {
            main = new J.Main();
            main.NovaPeca();

            $("#jogo td").click(function () {
                if ($(this).attr("c") == 1)
                    $(this)
                        .css({ "background": "" })
                        .removeAttr("c");
                else
                    main.Marcar($(this));
            });
        });
    });

module J {
    export class Main {

        _pecasArray: J.PecasArray;
        _peca: any;

        constructor() {
            this._pecasArray = new J.PecasArray();
        }

        NovaPeca(): void {
            $("#bloco td").css({ "background": "" });
            this._peca = this._pecasArray.NovaPeca();
            this._peca.forEach(function (item) {
                $("#bloco tr:eq(" + item[0] + ") td:eq(" + item[1] + ")").css({ "background": "blue" });
            });
        }

        Marcar(obj): void {
            obj.css({ "background": "blue" })
                .attr("c", "1");
            this.VerificaPeca(obj);
        }

        VerificaPeca(objClicado): void {
            var qtdeMarcados = $("#jogo td[c=1]").length;

            var x1: number = -1;
            var y1: number = -1;
            var isLimpa: boolean = true;

            if (qtdeMarcados <= 4)
                $("#jogo td[c=1]").each(function (index, obj) {
                    if (x1 == -1) {
                        x1 = $(obj).parent().index();
                        y1 = $(obj).index();
                    }
                    var xA: number = $(obj).parent().index() - x1;
                    var yA: number = $(obj).index() - y1;

                    for (var i: number = 0; i < this._peca.length; i++) {
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
        }

        LimparPeca(): void {
            $("#jogo td[c=1]")
                .css({ background: "" })
                .removeAttr("c");
        }

    }
}

