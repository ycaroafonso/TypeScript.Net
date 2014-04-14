interface IConvert {
    /*
    ToInt32(value: any): number;

    ToBoolean(value: string): boolean;

    ToDecimal(value: string): number;
*/
}

module System {
    export class Convert implements IConvert {
        constructor() { }

        public static ToInt32(value: any): number {
            try {
                return parseInt(value);
            } catch (e) {
                throw "Error static(value: string): number";
            }
        }

        public static ToBoolean(value: string): boolean {
            try {
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
        }

        public static ToDecimal(value: string): number {
            try {
                if (typeof value == "string") {
                    // (se tiver . e a , for depois do .)
                    //  || (se não tiver . e tiver ,)
                    if ((value.indexOf(".") > -1 && value.indexOf(",") > value.indexOf("."))
                        || (value.indexOf(".") == -1 && value.indexOf(",") > -1))
                        value = value.replace(/\./gi, "").replace(",", ".");
                }
                return parseFloat(value);
            } catch (e) {
                throw "Error ToDecimal(value: string): number";
            }
        }
    }
}