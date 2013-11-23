String.prototype.ToMascara = function (mascara) {
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

String.prototype.StringIsNullOrEmpty = function () {
    return this == null || this.length == 0;
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
//# sourceMappingURL=String.js.map
