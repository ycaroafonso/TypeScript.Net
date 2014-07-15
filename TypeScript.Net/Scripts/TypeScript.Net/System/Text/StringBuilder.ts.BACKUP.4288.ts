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
            this.Append("\n");
            this.Append(value);
            return this;
        }

        public Clear(): StringBuilder {
<<<<<<< HEAD
            this._retorna = [];
=======
            this._retorna = []
>>>>>>> github
            return this;
        }

        public ToString(): string {
            return this._retorna.join("");
        }
    }
}