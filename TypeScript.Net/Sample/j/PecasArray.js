/// <reference path="../../Scripts/TypeScript.Net/System/Collections/Generic/List.ts" />
/// <reference path="../../Scripts/TypeScript.Net/System/Random.ts" />
/// <reference path="../../Scripts/TypeScript.Net/Custom/Array.ts" />
/// <reference path="../../Scripts/typings/requirejs/require.d.ts" />
require.config({
    baseUrl: '../../Scripts/TypeScript.Net/'
});

//setTimeout(function () {
//    require(["System/Random", "System/Collections/Generic/List"], () => {
//        var o = new J.PecasArray();
//        alert(o.NovaPeca());
//        alert(o.getPeca());
//    });
//}, 20);
var J;
(function (J) {
    var PecasArray = (function () {
        function PecasArray() {
        }
        PecasArray.prototype.getPecasArray = function () {
            return [
                [
                    [
                        [0, 0], [0, 1],
                        [1, 0], [1, 1]
                    ]
                ],
                [
                    [
                        [0, 0], [0, 1], [0, 2], [0, 3]
                    ],
                    [
                        [0, 0],
                        [1, 0],
                        [2, 0],
                        [3, 0]
                    ]
                ],
                [
                    [
                        [0, 1],
                        [1, 0], [1, 1], [1, 2]
                    ],
                    [
                        [0, 0],
                        [1, 0], [1, 1],
                        [2, 0]
                    ],
                    [
                        [0, 0], [0, 1], [0, 2],
                        [1, 2]
                    ],
                    [
                        [0, 1],
                        [1, 0], [1, 1],
                        [2, 1]
                    ]
                ],
                [
                    [
                        [0, 0],
                        [1, 0], [1, 1], [1, 2]
                    ],
                    [
                        [0, 0], [0, 1],
                        [1, 0],
                        [2, 0]
                    ],
                    [
                        [0, 0], [0, 1], [0, 2],
                        [1, 2]
                    ],
                    [
                        [0, 1],
                        [1, 1],
                        [2, 0], [2, 1]
                    ]
                ],
                [
                    [
                        [0, 2],
                        [1, 0], [1, 1], [1, 2]
                    ],
                    [
                        [0, 0],
                        [1, 0],
                        [2, 0], [2, 1]
                    ],
                    [
                        [0, 0], [0, 1], [0, 2],
                        [1, 0]
                    ],
                    [
                        [0, 0], [0, 1],
                        [1, 1],
                        [2, 1]
                    ]
                ],
                [
                    [
                        [0, 0], [0, 1],
                        [1, 1], [1, 2]
                    ],
                    [
                        [0, 1],
                        [1, 0], [1, 1],
                        [2, 0]
                    ],
                    [
                        [0, 1], [0, 2],
                        [1, 0], [1, 1]
                    ],
                    [
                        [0, 0],
                        [1, 0], [1, 1],
                        [2, 1]
                    ]
                ]
            ];
        };

        PecasArray.prototype.getPeca = function () {
            return this.PecasList().Get(this._index);
        };

        PecasArray.prototype.getPecasList = function () {
            var _this = this;
            require(["System/Collections/Generic/List"], function () {
                if (_this._PecasList == null)
                    _this._PecasList = _this.PecasList();
            });
            return this._PecasList;
        };

        PecasArray.prototype.NovaPeca = function () {
            this._index = new System.Random().Next(0, this.PecasList().Count() - 1);
            return this.PecasList().Get(this._index);
        };

        PecasArray.prototype.PecasList = function () {
            var pecasArray = this.getPecasArray();
            this._PecasList = new System.Collections.Generic.List();
            for (var x = 0; x < pecasArray.length; x++) {
                for (var y = 0; y < pecasArray[x].length; y++) {
                    this._PecasList.Add(pecasArray[x][y]);
                }
            }
            return this._PecasList;
        };
        return PecasArray;
    })();
    J.PecasArray = PecasArray;
})(J || (J = {}));
//# sourceMappingURL=PecasArray.js.map
