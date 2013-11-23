interface IList<T> {
    Count(): number;

    Add(item: T): void;

    Clear(): void;



    Get(index: number): T;
}

module System.Collections.Generic {
    export class List<T> implements IList<T> {
        _list = [];

        constructor() { }

        Count(): number {
            return this._list.length;
        }

        Add(item: T): void {
            this._list.push(item);
        }

        Clear(): void {
            this._list = [];
        }




        Get(index: number): T {
            return this._list[index];
        }
    }
}