/// <reference path="../../typings/requirejs/require.d.ts" />
require.config({
    baseUrl: 'TypeScript.Net/',
});

interface IDateTime {
    Day(): number;
    Hour(): number;
    Millisecond(): number;
    Minute(): number;
    Month(): number;
    Now(): IDateTime;
    Second(): number;

    Year(): number;

    AddDays(value: number): IDateTime;
    AddHours(value: number): IDateTime;

    AddMinutes(value: number): IDateTime;
    AddMonths(months: number): IDateTime;
    AddSeconds(value: number): IDateTime;

    AddYears(value: number): IDateTime;

    DaysInMonth(year: number, month: number): number;

    ToString(format: string): string;
}

module System {
    export class DateTime implements IDateTime {
        _date: any;

        constructor(year: number = null, month: number = null, day: number = null, hour: number = 0, minute: number = 0, second: number = 0, millisecond: number = 0) {
            if (year == null && month == null && day == null)
                this._date = new Date();
            else
                this._date = new Date(year, month, day, hour, minute, second, millisecond);
        }

        public Day(): number {
            return this._date.getDate();
        }
        public Hour(): number {
            return this._date.getDate();
        }
        public Millisecond(): number {
            return this._date.getMilliseconds();
        }
        public Minute(): number {
            return this._date.getMinutes();
        }
        public Month(): number {
            return this._date.getMonth() + 1;
        }
        public static Now(): DateTime {
            return new DateTime();
        }
        public Second(): number {
            return this._date.getSeconds();
        }

        public Year(): number {
            return this._date.getFullYear();
        }


        public AddDays(value: number): DateTime {
            new Date(this._date.setDate(this.Day() + value));
            return this;
        }
        public AddHours(value: number): DateTime {
            new Date(this._date.setHours(this.Hour() + value));
            return this;
        }

        public AddMinutes(value: number): DateTime {
            new Date(this._date.setMinutes(this.Minute() + value));
            return this;
        }
        public AddMonths(months: number): DateTime {
            new Date(this._date.setMonth(this._date.getMonth() + months));
            return this;
        }
        public AddSeconds(value: number): DateTime {
            new Date(this._date.setSeconds(this.Second() + value));
            return this;
        }

        public AddYears(value: number): DateTime {
            new Date(this._date.setFullYear(this.Year() + value));
            return this;
        }

        public static DaysInMonth(year: number, month: number): number {
            var d = new Date(year, month - 1, 1);
            var year: number = d.getFullYear() + (d.getMonth() == 12 ? 1 : 0);
            var month: number = d.getMonth() == 12 ? 0 : d.getMonth() + 1;
            return new Date(year, month, 0).getDate();
        }

        public ToString(format: string = "dd/M/y hh:mm:ss S"): string {
            var q: number;
            require(["System/Math"], () => {
                q = System.MathTs.Floor((this._date.getMonth() + 3) / 3);
            });

            var o = {
                "y+": this.Year(),
                "M+": this.Month(),
                "d+": this.Day(),
                "h+": this.Hour(),
                "m+": this.Minute(),
                "s+": this.Second(),
                "q+": q,  //quarter
                "S": this.Millisecond()
            };

            //if (/(y+)/.test(format))
            //  format = format.replace(RegExp.$1, (this.Year() + "").substr(4 - RegExp.$1.length));
            for (var k in o) if (new RegExp("(" + k + ")").test(format))
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            return format;
        }
    }
}