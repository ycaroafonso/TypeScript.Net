///#source 1 1 /Scripts/TypeScript.Net/Custom/Array.js
/// <reference path="../System/Collections/Generic/Dictionary.ts" />

Array.prototype.ToList = function () {
    var ret = new System.Collections.Generic.List();
    for (var i = 0; i < this.length; i++)
        ret.Add(this[i]);
    return ret;
};
//# sourceMappingURL=Array.js.map

///#source 1 1 /Scripts/TypeScript.Net/Custom/DateDiff.js
var Custom;
(function (Custom) {
    var DateDiff = (function () {
        function DateDiff() {
        }
        DateDiff.prototype.InDays = function (d1, d2) {
            var t2 = d2.getTime();
            var t1 = d1.getTime();
            return (t2 - t1) / (24 * 3600 * 1000);
        };

        DateDiff.prototype.InWeeks = function (d1, d2) {
            var t2 = d2.getTime();
            var t1 = d1.getTime();
            return (t2 - t1) / (24 * 3600 * 1000 * 7);
        };

        DateDiff.prototype.InMonths = function (d1, d2) {
            var d1Y = d1.getFullYear();
            var d2Y = d2.getFullYear();
            var d1M = d1.getMonth();
            var d2M = d2.getMonth();
            return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
        };

        DateDiff.prototype.InYears = function (d1, d2) {
            return d2.getFullYear() - d1.getFullYear();
        };
        return DateDiff;
    })();
    Custom.DateDiff = DateDiff;
})(Custom || (Custom = {}));
//# sourceMappingURL=DateDiff.js.map

///#source 1 1 /Scripts/TypeScript.Net/Custom/Mask.js

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

///#source 1 1 /Scripts/TypeScript.Net/Custom/Number.js
Number.prototype.ToRound = function (digits) {
    if (digits < 0 || digits > 10)
        return this;
    var pow10 = Math.pow(10, digits);
    return Math.round(this * pow10) / pow10;
};
//# sourceMappingURL=Number.js.map

///#source 1 1 /Scripts/TypeScript.Net/Custom/NumeroPorExtenso.js
/// <reference path="../../typings/requirejs/require.d.ts" />
/// <reference path='../System/Collections/Generic/Dictionary.ts' />
/// <reference path='../System/Convert.ts' />
/// <reference path='../System/MathTs.ts' />
/// <reference path='../../typings/qunit/qunit.d.ts' />
var Custom;
(function (Custom) {
    var NumeroPorExtenso = (function () {
        function NumeroPorExtenso() {
        }
        NumeroPorExtenso.prototype.GetNomeNumero = function () {
            if (this._NomeNumero == null) {
                var arr = [
                    [1, 'Um'],
                    [2, 'Dois'],
                    [3, 'Tres'],
                    [4, 'Quatro'],
                    [5, 'Cinco'],
                    [6, 'Seis'],
                    [7, 'Sete'],
                    [8, 'Oito'],
                    [9, 'Nove'],
                    [10, 'Dez'],
                    [11, 'Onze'],
                    [12, 'Doze'],
                    [13, 'Treze'],
                    [14, 'Quartorze'],
                    [15, 'Quinze'],
                    [16, 'Dezesseis'],
                    [17, 'Dezesete'],
                    [18, 'Dezoito'],
                    [19, 'Dezenove'],
                    [20, 'Vinte'],
                    [30, 'Trinta'],
                    [40, 'Quarenta'],
                    [50, 'Cinquenta'],
                    [60, 'Sessenta'],
                    [70, 'Setenta'],
                    [80, 'Oitenta'],
                    [90, 'Noventa'],
                    [100, 'Cento'],
                    [200, 'Duzentos'],
                    [300, 'Trezentos'],
                    [400, 'Quatrocentos'],
                    [500, 'Quinhentos'],
                    [600, 'Seiscentos'],
                    [700, 'Setecentos'],
                    [800, 'Oitocentos'],
                    [900, 'Novecentos'],
                    [1000, 'Mil'],
                    [1000000, 'Milhões'],
                    [1000000000, 'Bilhões'],
                    [1000000000000, 'Trilhões']
                ];
                this._NomeNumero = System.Collections.Generic.Dictionary.ToDictionary(arr, 0, 1);
            }
            return this._NomeNumero;
        };

        NumeroPorExtenso.prototype.SeparaNumero = function (input) {
            var o = input.split("").reverse().join("");
            var arr = o.match(/\d{1,3}/gi);
            for (var x = 0; x < arr.length; x++)
                arr[x] = arr[x].split("").reverse().join("");
            return arr;
        };

        NumeroPorExtenso.prototype.Calcula = function (input) {
            switch (input) {
                case "0":
                    return "Zero";
                case "":
                    return "Vazio";
                default:
                    var arr = this.SeparaNumero(input);
                    var ret = "";

                    for (var i = arr.length - 1; i >= 0; i--) {
                        var res = System.Convert.ToInt32(arr[i] + "");

                        if (this.GetNomeNumero().ContainsKey(res)) {
                            ret += this.GetNomeNumero().GetByKey(res) + " e ";
                        } else {
                            var n = (arr[i].toString()).split("").reverse();
                            for (var x = n.length - 1; x >= 0; x--) {
                                if (this.GetNomeNumero().ContainsKey(res)) {
                                    ret += this.GetNomeNumero().GetByKey(res) + " e ";
                                    break;
                                } else {
                                    var fatorG = System.MathTs.Pow(10, x);
                                    var numeroG = fatorG * n[x];

                                    if (this.GetNomeNumero().ContainsKey(numeroG)) {
                                        ret += this.GetNomeNumero().GetByKey(numeroG) + " e ";
                                        res = res - numeroG;
                                    }
                                }
                            }
                        }
                        var fator = System.Convert.ToInt32("1".PadRight((i * 3) + 1, "0"));
                        if (arr[i].toString() != "000" && fator >= 1000)
                            ret = ret.replace(/ e $/i, " ") + this.GetNomeNumero().GetByKey(fator) + ", ";
                    }
                    return ret.replace(/( e |, )$/gi, "");
            }
        };
        return NumeroPorExtenso;
    })();
    Custom.NumeroPorExtenso = NumeroPorExtenso;
})(Custom || (Custom = {}));
//# sourceMappingURL=NumeroPorExtenso.js.map

///#source 1 1 /Scripts/TypeScript.Net/Custom/String.js
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
    return this == null || this == "";
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

///#source 1 1 /Scripts/TypeScript.Net/System/Collections/Generic/Dictionary.js
var System;
(function (System) {
    (function (Collections) {
        (function (Generic) {
            var Dictionary = (function () {
                function Dictionary() {
                    this._list = new Array();
                }
                Dictionary.prototype.Count = function () {
                    var qtde = 0;
                    this._list.forEach(function (val, index, theArray) {
                        qtde++;
                    });
                    return qtde;
                };

                Dictionary.prototype.Add = function (key, value) {
                    if (!this.ContainsKey(key)) {
                        this._list.push({ Key: key, Value: value });
                    } else
                        throw "An item with the same key has already been added.";
                };

                Dictionary.prototype.Clear = function () {
                    this._list = [];
                };
                Dictionary.prototype.ContainsKey = function (key) {
                    return this.GetByKey(key) != null;
                };
                Dictionary.prototype.ContainsValue = function (value) {
                    var ret = false;
                    this._list.forEach(function (val, index, theArray) {
                        if (val.Value == value)
                            ret = true;
                    });

                    return ret;
                };

                Dictionary.prototype.Remove = function (key) {
                    if (this.ContainsKey(key)) {
                        this._list.splice(this.GetIndexByKey(key), 1);
                        return true;
                    }
                    return false;
                };

                Dictionary.prototype.GetByKey = function (key) {
                    var ret = null;
                    this._list.forEach(function (val, index, theArray) {
                        if (val.Key == key)
                            ret = val.Value;
                    });
                    return ret;
                };
                Dictionary.prototype.GetByIndex = function (index) {
                    var ret = null;
                    this._list.forEach(function (val, i, theArray) {
                        if (i == index)
                            ret = val.Value;
                    });
                    return ret;
                };
                Dictionary.prototype.ToArray = function () {
                    return this._list;
                };

                Dictionary.prototype.GetIndexByKey = function (key) {
                    var ret = -1;
                    this._list.forEach(function (val, index, theArray) {
                        if (val.Key == key)
                            ret = index;
                    });
                    return ret;
                };

                Dictionary.ToDictionary = function (arr, key, value) {
                    if (typeof key === "undefined") { key = 0; }
                    if (typeof value === "undefined") { value = 1; }
                    var ret = new System.Collections.Generic.Dictionary();
                    arr.forEach(function (val, index, theArray) {
                        ret.Add(val[key], val[value]);
                    });
                    return ret;
                };
                return Dictionary;
            })();
            Generic.Dictionary = Dictionary;
        })(Collections.Generic || (Collections.Generic = {}));
        var Generic = Collections.Generic;
    })(System.Collections || (System.Collections = {}));
    var Collections = System.Collections;
})(System || (System = {}));
//# sourceMappingURL=Dictionary.js.map

///#source 1 1 /Scripts/TypeScript.Net/System/Collections/Generic/List.js
var System;
(function (System) {
    (function (Collections) {
        (function (Generic) {
            var List = (function () {
                function List() {
                    this._list = new Array();
                }
                List.prototype.Count = function () {
                    return this._list.length;
                };

                List.prototype.Add = function (item) {
                    this._list.push(item);
                };

                List.prototype.Clear = function () {
                    this._list = new Array();
                };

                List.prototype.Get = function (index) {
                    return this._list[index];
                };

                List.prototype.ToArray = function () {
                    return this._list;
                };
                return List;
            })();
            Generic.List = List;
        })(Collections.Generic || (Collections.Generic = {}));
        var Generic = Collections.Generic;
    })(System.Collections || (System.Collections = {}));
    var Collections = System.Collections;
})(System || (System = {}));
//# sourceMappingURL=List.js.map

///#source 1 1 /Scripts/TypeScript.Net/System/Text/StringBuilder.js
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
                this.Append("\n");
                this.Append(value);
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

///#source 1 1 /Scripts/TypeScript.Net/System/Convert.js
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

///#source 1 1 /Scripts/TypeScript.Net/System/DateTime.js
var System;
(function (System) {
    var DateTime = (function () {
        function DateTime(year, month, day, hour, minute, second, millisecond) {
            if (typeof year === "undefined") { year = null; }
            if (typeof month === "undefined") { month = null; }
            if (typeof day === "undefined") { day = null; }
            if (typeof hour === "undefined") { hour = 0; }
            if (typeof minute === "undefined") { minute = 0; }
            if (typeof second === "undefined") { second = 0; }
            if (typeof millisecond === "undefined") { millisecond = 0; }
            if (year == null && month == null && day == null)
                this._date = new Date();
            else
                this._date = new Date(year, month - 1, day, hour, minute, second, millisecond);
        }
        DateTime.prototype.Day = function () {
            return this._date.getDate();
        };
        DateTime.prototype.Hour = function () {
            return this._date.getHours();
        };
        DateTime.prototype.Millisecond = function () {
            return this._date.getMilliseconds();
        };
        DateTime.prototype.Minute = function () {
            return this._date.getMinutes();
        };
        DateTime.prototype.Month = function () {
            return this._date.getMonth() + 1;
        };
        DateTime.Now = function () {
            return new DateTime();
        };
        DateTime.prototype.Second = function () {
            return this._date.getSeconds();
        };

        DateTime.prototype.Year = function () {
            return this._date.getFullYear();
        };

        DateTime.prototype.AddDays = function (value) {
            new Date(this._date.setDate(this.Day() + value));
            return this;
        };
        DateTime.prototype.AddHours = function (value) {
            new Date(this._date.setHours(this.Hour() + value));
            return this;
        };

        DateTime.prototype.AddMinutes = function (value) {
            new Date(this._date.setMinutes(this.Minute() + value));
            return this;
        };
        DateTime.prototype.AddMonths = function (months) {
            new Date(this._date.setMonth(this._date.getMonth() + months));
            return this;
        };
        DateTime.prototype.AddSeconds = function (value) {
            new Date(this._date.setSeconds(this.Second() + value));
            return this;
        };

        DateTime.prototype.AddYears = function (value) {
            new Date(this._date.setFullYear(this.Year() + value));
            return this;
        };

        DateTime.DaysInMonth = function (year, month) {
            var d = new Date(year, month - 1, 1);
            year = d.getFullYear() + (d.getMonth() == 12 ? 1 : 0);
            month = d.getMonth() == 12 ? 0 : d.getMonth() + 1;
            return new Date(year, month, 0).getDate();
        };

        DateTime.prototype.ToString = function (format) {
            if (typeof format === "undefined") { format = "dd/M/y hh:mm:ss S"; }
            var q = Math.floor((this._date.getMonth() + 3) / 3);

            var o = {
                "y+": this.Year(),
                "M+": this.Month(),
                "d+": this.Day(),
                "h+": this.Hour(),
                "m+": this.Minute(),
                "s+": this.Second(),
                "q+": q,
                "S": this.Millisecond()
            };

            for (var k in o)
                if (new RegExp("(" + k + ")").test(format))
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            return format;
        };
        return DateTime;
    })();
    System.DateTime = DateTime;
})(System || (System = {}));
//# sourceMappingURL=DateTime.js.map

///#source 1 1 /Scripts/TypeScript.Net/System/MathTs.js
var System;
(function (System) {
    var MathTs = (function () {
        function MathTs() {
        }
        MathTs.Floor = function (d) {
            return (d | 0) - (((d + "").indexOf("-") > -1) ? 1 : 0);
        };

        MathTs.Pow = function (x, y) {
            var r = 1;
            for (var i = 0; i < y; i++)
                r = r * x;
            return r;
        };

        MathTs.Round = function (d, decimals) {
            var pow10 = this.Pow(10, decimals);
            var a = (d * pow10) | 0;
            if (parseInt((d + "").substr((d + "").indexOf(".")).replace(".", "").substr(decimals, 1)) >= 5)
                a += 1;
            return a / pow10;
        };
        return MathTs;
    })();
    System.MathTs = MathTs;
})(System || (System = {}));
//# sourceMappingURL=MathTs.js.map

///#source 1 1 /Scripts/TypeScript.Net/System/Random.js
var System;
(function (System) {
    var Random = (function () {
        function Random() {
        }
        Random.prototype.Next = function (minValue, maxValue) {
            var value;
            value = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
            return value;
        };
        return Random;
    })();
    System.Random = Random;
})(System || (System = {}));
//# sourceMappingURL=Random.js.map

