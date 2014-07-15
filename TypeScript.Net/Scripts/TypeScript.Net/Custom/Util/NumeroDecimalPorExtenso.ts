/// <reference path='NumeroPorExtenso.ts' />
/// <reference path='../../System/Text/StringBuilder.ts' />
/// <reference path='../../System/Convert.ts' />

interface NumeroDecimalPorExtenso {
    getNumero(): number;
    setNumero(input: number): void;

    Calcula(input: number, textoInteiro: string[], textoDecimal: string[]): string;
}

module Custom.Util {
    export class NumeroDecimalPorExtenso {
        private _numero: number;

        public getNumero(): number {
            return this._numero;
        }
        public setNumero(input: number): void {
            this._numero = input;
        }

        constructor() {

        }

        public Calcula(input: number = this.getNumero(), textoInteiro: string[]= ["Real", "Reais"], textoDecimal: string[]= ["Centavo", "Centavos"]): string {
            if (input.toString() == "") {
                return "Vazio";
            } else {
                var v = input.toString().split('.');
                var nInt: number;
                var nDec: number = 0;
                if (v.length > 0) {
                    nInt = System.Convert.ToInt32(v[0]);
                    nDec = System.Convert.ToDecimal(v[1]);
                } else {
                    nInt = input;
                }

                var ret: System.Text.StringBuilder = new System.Text.StringBuilder();
                var numeroPorExtenso: NumeroPorExtenso = new Custom.Util.NumeroPorExtenso();

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
        }
    }
}