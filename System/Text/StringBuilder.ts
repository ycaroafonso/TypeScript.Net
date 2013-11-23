interface IStringBuilder {
    Append(value: string): IStringBuilder;
    AppendLine(value: string): IStringBuilder;

    Clear(): IStringBuilder;

    ToString(): string;
}

module System.Text {
    export class StringBuilder implements IStringBuilder {
        private _retorna: any = []

        constructor() { }

        public Append(value: string): StringBuilder {
            this._retorna.push(value);
            return this;
        }

        public AppendLine(value: string): StringBuilder {
            this.Append(value);
            this.Append("\n");
            return this;
        }

        public Clear(): StringBuilder {
            this._retorna = []
            return this;
        }

        public ToString(): string {
            return this._retorna.join("");
        }
    }
}