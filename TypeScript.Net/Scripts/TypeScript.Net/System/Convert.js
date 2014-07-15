var System;
(function (System) {
    var Convert = (function () {
        function Convert() {
        }
        Convert.ToInt32 = function (value) {
            try  {
                return parseInt(value);
            } catch (e) {
                throw "Error static(value: string): number";
            }
        };

        Convert.ToBoolean = function (value) {
            try  {
                switch (value) {
                    case "true":
                    case "1":
                        return true;
                    case "false":
                    case "0":
                    case "":
                    case null:
                        return false;
                }
            } catch (e) {
                throw "Error ToBoolean(value: string): boolean";
            }
        };

        Convert.ToDecimal = function (value) {
            try  {
                if (typeof value == "string") {
                    // (se tiver . e a , for depois do .)
                    //  || (se não tiver . e tiver ,)
                    if ((value.indexOf(".") > -1 && value.indexOf(",") > value.indexOf(".")) || (value.indexOf(".") == -1 && value.indexOf(",") > -1))
                        value = value.replace(/\./gi, "").replace(",", ".");
                }
                return parseFloat(value);
            } catch (e) {
                throw "Error ToDecimal(value: string): number";
            }
        };
        return Convert;
    })();
    System.Convert = Convert;
})(System || (System = {}));
//# sourceMappingURL=Convert.js.map
