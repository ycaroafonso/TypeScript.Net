interface String {
    ToMask(mascara: string): string;

    ToDecimal(): number;
    ToBoolean(): boolean;
    ToInt32(): number;

    IsNullOrEmpty(): boolean;

    PadLeft(n: number, pad: string): string;
    PadRight(n: number, pad: string): string;

    ToLower(): string;
    ToUpper(): string;

    ToCpfOuCnpj(): string;
    ClearMask(): string;
}

String.prototype.ToMask = function (mascara): string {
    var x = 1;
    var rp = mascara.replace(/(\w)/gi, function (match, contents, offset, s) { return "$" + x++; });
    return this.replace(new RegExp(this.replace(/([\w])/gi, "([\\w])")), rp);
};

String.prototype.ToDecimal = function (): number {
    var strValue: string = this;

    if ((strValue.indexOf(".") > -1 && strValue.indexOf(",") > strValue.indexOf("."))
        || (strValue.indexOf(".") == -1 && strValue.indexOf(",") > -1))
        strValue = strValue.replace(/\./gi, "").replace(",", ".");

    return parseFloat(strValue);
};


String.prototype.ToInt32 = function (): number {
    return parseInt(this);
};



String.prototype.IsNullOrEmpty = function (): boolean {
    return this == null || this.length == 0;
};



String.prototype.PadLeft = function (n: number, pad: string = "0"): string {
    var t: string = '';
    if (n > this.length)
        for (var i: number = 0; i < n - this.length; i++)
            t += pad;
    return t + this;
}
String.prototype.PadRight = function (n: number, pad: string) {
    var t: string = this;
    if (n > this.length)
        for (var i: number = 0; i < n - this.length; i++)
            t += pad;
    return t;
}



String.prototype.ToLower = function (): string {
    return this.toLowerCase();
};
String.prototype.ToUpper = function (): string {
    return this.toUpperCase();
};






String.prototype.ToCpfOuCnpj = function (): string {
    switch (this.length) {
        case 11: // CPF
            return this.ToMascara("999.999.999-99");
        case 14: // CNPJ
            return this.ToMascara("99.999.999/9999-99");
    }
    return null;
};

String.prototype.ClearMask = function (): string {
    return this.replace(/[^\d+]/gi, "");
}