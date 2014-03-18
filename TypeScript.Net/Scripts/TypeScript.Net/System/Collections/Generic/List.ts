interface IList<T> {
    Count(): number;

    Add(item: T): void;

    Clear(): void;

    Get(index: number): T;

    ToArray(): Array;
}

module System.Collections.Generic {
    export class List<T> implements IList<T> {
        private _list: Array;

        constructor() {
            this._list = new Array();
        }

        Count(): number {
            return this._list.length;
        }

        Add(item: T): void {
            this._list.push(item);
        }

        Clear(): void {
            this._list = new Array();
        }



        Get(index: number): T {
            return this._list[index];
        }

        ToArray(): Array {
            return this._list;
        }
    }
}