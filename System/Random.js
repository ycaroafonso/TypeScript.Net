var System;
(function (System) {
    var Random = (function () {
        function Random() {
        }
        Random.prototype.Next = function (minValue, maxValue) {
            var value;
            value = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
            return value;
        };
        return Random;
    })();
    System.Random = Random;
})(System || (System = {}));
//# sourceMappingURL=Random.js.map
