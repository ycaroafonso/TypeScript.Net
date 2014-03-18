// Interface
interface IMask {
    setInput(input: string): void;
    getInput(): string;

    AddMask(mask: string): IMask;
    ToString(): string;
}

module Custom {
    export class Mask implements IMask {
        private _masks: string[];
        private _input: string;

        constructor(input: any) {
            this._input = input.toString();
        }

        // #region Get's e Set's

        public setInput(input: string): void {
            this._input = input;
        }

        public getInput(): string {
            return this._input;
        }

        // #endregion

        public AddMask(mask: string): Mask {
            this._masks.push(mask);
            return this;
        }

        public ToString(): string {
            var mascara: string;
            for (var item in this._masks) {
                if (item.replace(/^\d/gi, "").length == this._input.length) {
                    mascara = item;
                    break;
                }
            }

            var x: number = 1;
            var rp: string = mascara.replace(/(\w)/gi, function (match, contents, offset, s) { return "$" + x++; });

            return this._input.replace(new RegExp(this._input.replace(/([\w])/gi, "([\\w])")), rp);
        }
    }
}
