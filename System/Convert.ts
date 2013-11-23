interface IConvert {
    ToInt32(value: string): number;

    ToBoolean(value: string): boolean;

    ToDecimal(value: string): number;
}

module System {
    export class Convert implements IConvert {
        constructor() { }

        public static ToInt32(value: string): number {
            return parseInt(value);
        }

        public static ToBoolean(value: string): boolean {
            return (value == "true" && value != "" && value != null);
        }

        public static ToDecimal(value: string): number {
            if (typeof value == "string") {
                // (se tiver . e a , for depois do .)
                //  || (se não tiver . e tiver ,)
                if ((value.indexOf(".") > -1 && value.indexOf(",") > value.indexOf("."))
                    || (value.indexOf(".") == -1 && value.indexOf(",") > -1))
                    value = value.replace(/\./gi, "").replace(",", ".");
            }
            return parseFloat(value);
        }
    }
}