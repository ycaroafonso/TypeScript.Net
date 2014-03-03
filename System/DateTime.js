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
