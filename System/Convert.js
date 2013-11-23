var System;
(function (System) {
    var Convert = (function () {
        function Convert() {
        }
        Convert.ToInt32 = function (value) {
            return parseInt(value);
        };

        Convert.ToBoolean = function (value) {
            return (value == "true" && value != "" && value != null);
        };

        Convert.ToDecimal = function (value) {
            if (typeof value == "string") {
                if ((value.indexOf(".") > -1 && value.indexOf(",") > value.indexOf(".")) || (value.indexOf(".") == -1 && value.indexOf(",") > -1))
                    value = value.replace(/\./gi, "").replace(",", ".");
            }
            return parseFloat(value);
        };
        return Convert;
    })();
    System.Convert = Convert;
})(System || (System = {}));
//# sourceMappingURL=Convert.js.map
