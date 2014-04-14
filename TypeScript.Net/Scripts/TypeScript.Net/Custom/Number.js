Number.prototype.ToRound = function (digits) {
    if (digits < 0 || digits > 10)
        return this;
    var pow10 = Math.pow(10, digits);
    return Math.round(this * pow10) / pow10;
};

Number.prototype.ToString = function () {
    var val = this == "" || this == null ? parseFloat(0) : this;
    val = val.toFixed(2);
    val = val.replace(".", ",");
    return val;
};

Number.prototype.ToMoney = function () {
    var val = this == "" || this == null ? parseFloat(0) : this;
    val = val.toFixed(2);
    val = val.replace(".", ",");
    return val;
};
//# sourceMappingURL=Number.js.map
