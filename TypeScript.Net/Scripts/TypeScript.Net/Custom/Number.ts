interface Number {
    ToRound(digits: number): number;
    ToString(): string;
}
Number.prototype.ToRound = function (digits: number) {
    if (digits < 0 || digits > 10)
        return this;
    var pow10 = Math.pow(10, digits);
    return Math.round(this * pow10) / pow10;
}


Number.prototype.ToString = function (): string {
    var val = this == "" || this == null ? parseFloat(0) : this;
    val = val.toFixed(2);
    val = val.replace(".", ",");
    return val;
}