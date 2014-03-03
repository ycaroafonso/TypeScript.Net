interface ISelectListItem {

    getSelected(): boolean;
    setSelected(pSelected: boolean): void;

    getText(): string;
    setText(pText: string): void;

    getValue(): string;
    setValue(pValue: string): void;

}

module System.Web.Mvc {

    export class SelectListItem implements ISelectListItem {

        private _Selected: boolean;
        private _Text: string;
        private _Value: string;

        constructor() { }

        public getSelected(): boolean {
            return this._Selected;
        }
        public setSelected(pSelected: boolean): void {
            this._Selected = pSelected;
        }


        public getText(): string {
            return this._Text;
        }
        public setText(pText: string): void {
            this._Text = pText;
        }


        public getValue(): string {
            return this._Value;
        }
        public setValue(pValue: string): void {
            this._Value = pValue;
        }

    }

}
