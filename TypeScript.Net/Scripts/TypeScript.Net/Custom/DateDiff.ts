interface IDateDiff {
    InDays(d1: Date, d2: Date): number;
    InWeeks(d1: Date, d2: Date): number;
    InMonths(d1: Date, d2: Date): number;
    InYears(d1: Date, d2: Date): number;
}

module Custom {
    export class DateDiff implements IDateDiff {

        public InDays(d1: Date, d2: Date): number {
            var t2: number = d2.getTime();
            var t1: number = d1.getTime();
            return (t2 - t1) / (24 * 3600 * 1000);
        }

        public InWeeks(d1: Date, d2: Date): number {
            var t2: number = d2.getTime();
            var t1: number = d1.getTime();
            return (t2 - t1) / (24 * 3600 * 1000 * 7);
        }

        public InMonths(d1: Date, d2: Date): number {
            var d1Y: number = d1.getFullYear();
            var d2Y: number = d2.getFullYear();
            var d1M: number = d1.getMonth();
            var d2M: number = d2.getMonth();
            return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
        }

        public InYears(d1: Date, d2: Date): number {
            return d2.getFullYear() - d1.getFullYear();
        }

    }
}