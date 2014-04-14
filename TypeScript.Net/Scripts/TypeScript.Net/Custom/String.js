String.prototype.ToMask = function (mascara) {
    var x = 1;
    var rp = mascara.replace(/(\w)/gi, function (match, contents, offset, s) {
        return "$" + x++;
    });
    return this.replace(new RegExp(this.replace(/([\w])/gi, "([\\w])")), rp);
};

String.prototype.ToDecimal = function () {
    var strValue = this;

    if ((strValue.indexOf(".") > -1 && strValue.indexOf(",") > strValue.indexOf(".")) || (strValue.indexOf(".") == -1 && strValue.indexOf(",") > -1))
        strValue = strValue.replace(/\./gi, "").replace(",", ".");

    return parseFloat(strValue);
};

String.prototype.ToInt32 = function () {
    return parseInt(this);
};

String.prototype.IsNullOrEmpty = function () {
    return this == null || this.length == 0;
};

String.prototype.PadLeft = function (n, pad) {
    if (typeof pad === "undefined") { pad = "0"; }
    var t = '';
    if (n > this.length)
        for (var i = 0; i < n - this.length; i++)
            t += pad;
    return t + this;
};
String.prototype.PadRight = function (n, pad) {
    var t = this;
    if (n > this.length)
        for (var i = 0; i < n - this.length; i++)
            t += pad;
    return t;
};

String.prototype.ToLower = function () {
    return this.toLowerCase();
};
String.prototype.ToUpper = function () {
    return this.toUpperCase();
};

String.prototype.ToCpfOuCnpj = function () {
    switch (this.length) {
        case 11:
            return this.ToMascara("999.999.999-99");
        case 14:
            return this.ToMascara("99.999.999/9999-99");
    }
    return null;
};

String.prototype.ClearMask = function () {
    return this.replace(/[^\d+]/gi, "");
};
//# sourceMappingURL=String.js.map
