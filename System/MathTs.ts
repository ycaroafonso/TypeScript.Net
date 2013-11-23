module System {

    export class MathTs {
        constructor() { }

        public static Floor(d: number): number {
            return (d | 0) - (((d + "").indexOf("-") > -1) ? 1 : 0);
        }

        public static Pow(x: number, y: number): number {
            var r: number = 1;
            for (var i: number = 0; i < y; i++) r = r * x;
            return r;
        }

        public static Round(d: number, decimals: number): number {
            var pow10: number = this.Pow(10, decimals);
            var a: number = (d * pow10) | 0;
            if (parseInt((d + "").substr((d + "").indexOf(".")).replace(".", "").substr(decimals)) >= 5)
                a += 1;
            return a / pow10
        }

    }
}