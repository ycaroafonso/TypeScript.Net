var System;
(function (System) {
    var MathTs = (function () {
        function MathTs() {
        }
        MathTs.Floor = function (d) {
            return (d | 0) - (((d + "").indexOf("-") > -1) ? 1 : 0);
        };

        MathTs.Pow = function (x, y) {
            var r = 1;
            for (var i = 0; i < y; i++)
                r = r * x;
            return r;
        };

        MathTs.Round = function (d, decimals) {
            var pow10 = this.Pow(10, decimals);
            var a = (d * pow10) | 0;
            if (parseInt((d + "").substr((d + "").indexOf(".")).replace(".", "").substr(decimals)) >= 5)
                a += 1;
            return a / pow10;
        };
        return MathTs;
    })();
    System.MathTs = MathTs;
})(System || (System = {}));
//# sourceMappingURL=MathTs.js.map
