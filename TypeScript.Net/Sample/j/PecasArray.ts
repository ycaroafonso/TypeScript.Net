/// <reference path="../../Scripts/TypeScript.Net/System/Collections/Generic/List.ts" />
/// <reference path="../../Scripts/TypeScript.Net/System/Random.ts" />
/// <reference path="../../Scripts/TypeScript.Net/Custom/Array.ts" />
/// <reference path="../../Scripts/typings/requirejs/require.d.ts" />

require.config({
    baseUrl: '../../Scripts/TypeScript.Net/'
});


interface IPecasArray {
    getPecasList(): System.Collections.Generic.List<any>;
    getPecasArray();
    getPeca(): any;

    NovaPeca(): any;
}

//setTimeout(function () {
//    require(["System/Random", "System/Collections/Generic/List"], () => {
//        var o = new J.PecasArray();
//        alert(o.NovaPeca());
//        alert(o.getPeca());
//    });
//}, 20);

module J {
    export class PecasArray implements IPecasArray {

        private _PecasList: System.Collections.Generic.List<any>;
        private _index: number;

        constructor() { }

        getPecasArray() {
            return [
                [
                    [
                        [0, 0], [0, 1],
                        [1, 0], [1, 1],
                    ],
                ],
                [
                    [
                        [0, 0], [0, 1], [0, 2], [0, 3],
                    ],
                    [
                        [0, 0],
                        [1, 0],
                        [2, 0],
                        [3, 0],
                    ],
                ],
                [
                    [
                        [0, 1],
                        [1, 0], [1, 1], [1, 2],
                    ],
                    [
                        [0, 0],
                        [1, 0], [1, 1],
                        [2, 0],
                    ],
                    [
                        [0, 0], [0, 1], [0, 2],
                        [1, 2],
                    ],
                    [
                        [0, 1],
                        [1, 0], [1, 1],
                        [2, 1],
                    ],
                ],
                [
                    [
                        [0, 0],
                        [1, 0], [1, 1], [1, 2],
                    ],
                    [
                        [0, 0], [0, 1],
                        [1, 0],
                        [2, 0],
                    ],
                    [
                        [0, 0], [0, 1], [0, 2],
                        [1, 2],
                    ],
                    [
                        [0, 1],
                        [1, 1],
                        [2, 0], [2, 1],
                    ],
                ],
                [
                    [
                        [0, 2],
                        [1, 0], [1, 1], [1, 2],
                    ],
                    [
                        [0, 0],
                        [1, 0],
                        [2, 0], [2, 1],
                    ],
                    [
                        [0, 0], [0, 1], [0, 2],
                        [1, 0]
                    ],
                    [
                        [0, 0], [0, 1],
                        [1, 1],
                        [2, 1],
                    ],
                ],
                [
                    [
                        [0, 0], [0, 1],
                        [1, 1], [1, 2],
                    ],
                    [
                        [0, 1],
                        [1, 0], [1, 1],
                        [2, 0],
                    ],
                    [
                        [0, 1], [0, 2],
                        [1, 0], [1, 1],
                    ],
                    [
                        [0, 0],
                        [1, 0], [1, 1],
                        [2, 1]
                    ],
                ]
            ];
        }

        getPeca(): any {
            return this.PecasList().Get(this._index);
        }

        getPecasList(): System.Collections.Generic.List<any> {
            require(["System/Collections/Generic/List"], () => {
                if (this._PecasList == null)
                    this._PecasList = this.PecasList();
            });
            return this._PecasList;
        }


        NovaPeca(): any {
            this._index = new System.Random().Next(0, this.PecasList().Count() - 1);
            return this.PecasList().Get(this._index);
        }

        PecasList(): System.Collections.Generic.List<any> {
            var pecasArray: any = this.getPecasArray();
            this._PecasList = new System.Collections.Generic.List<any>();
            for (var x: number = 0; x < pecasArray.length; x++) {
                for (var y: number = 0; y < pecasArray[x].length; y++) {
                    this._PecasList.Add(pecasArray[x][y]);
                }
            }
            return this._PecasList;
        }

    }
}
