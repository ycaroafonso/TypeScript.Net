
var Custom;
(function (Custom) {
    var Mask = (function () {
        function Mask(input) {
            this._input = input.toString();
        }
        // #region Get's e Set's
        Mask.prototype.setInput = function (input) {
            this._input = input;
        };

        Mask.prototype.getInput = function () {
            return this._input;
        };

        // #endregion
        Mask.prototype.AddMask = function (mask) {
            this._masks.push(mask);
            return this;
        };

        Mask.prototype.ToString = function () {
            var mascara;
            for (var item in this._masks) {
                if (item.replace(/^\d/gi, "").length == this._input.length) {
                    mascara = item;
                    break;
                }
            }

            var x = 1;
            var rp = mascara.replace(/(\w)/gi, function (match, contents, offset, s) {
                return "$" + x++;
            });

            return this._input.replace(new RegExp(this._input.replace(/([\w])/gi, "([\\w])")), rp);
        };
        return Mask;
    })();
    Custom.Mask = Mask;
})(Custom || (Custom = {}));
//# sourceMappingURL=Mask.js.map
