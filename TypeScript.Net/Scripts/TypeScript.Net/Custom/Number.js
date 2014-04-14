Number.prototype.ToRound = function (digits) {
    if (digits < 0 || digits > 10)
        return this;
    var pow10 = Math.pow(10, digits);
    return Math.round(this * pow10) / pow10;
};
//# sourceMappingURL=Number.js.map
