/// <reference path="MathTs.ts" />
require.config({
    baseUrl: 'TypeScript.Net/',
});

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
