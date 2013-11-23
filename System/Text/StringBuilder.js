var System;
(function (System) {
    (function (Text) {
        var StringBuilder = (function () {
            function StringBuilder() {
                this._retorna = [];
            }
            StringBuilder.prototype.Append = function (value) {
                this._retorna.push(value);
                return this;
            };

            StringBuilder.prototype.AppendLine = function (value) {
                this.Append(value);
                this.Append("\n");
                return this;
            };

            StringBuilder.prototype.Clear = function () {
                this._retorna = [];
                return this;
            };

            StringBuilder.prototype.ToString = function () {
                return this._retorna.join("");
            };
            return StringBuilder;
        })();
        Text.StringBuilder = StringBuilder;
    })(System.Text || (System.Text = {}));
    var Text = System.Text;
})(System || (System = {}));
//# sourceMappingURL=StringBuilder.js.map
