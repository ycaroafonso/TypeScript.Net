module System {
    export class Random {
        constructor() { }

        Next(minValue: number, maxValue: number): number {
            var value: number;
            value = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
            return value;
        }
    }
}
