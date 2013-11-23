interface IDictionary<TKey, TValue> {
    Count(): number;

    Add(key: TKey, value: TValue): void;

    Clear(): void;
    ContainsKey(value: TValue): boolean;
    ContainsValue(value: TValue): boolean;

    GetByKey(key: TKey): TValue;
    GetByIndex(index: number): void;
    GetAll(): void;
}

module System.Collections.Generic {
    export class Dictionary<TKey, TValue> implements IDictionary<TKey, TValue> {
        private _list: any = [];

        constructor() { }

        Count(): number {
            return this._list.length;
        }

        Add(key: TKey, value: TValue): void {
            if (!this.ContainsKey(key))
                this._list.push({ "key": key, "value": value });
            else
                throw "An item with the same key has already been added.";
        }

        Clear(): void {
            this._list = [];
        }
        ContainsKey(key: TKey): boolean {
            var ret: boolean = false;
            this._list.forEach(function (val, index, theArray) {
                if (val.key == key) {
                    ret = true;
                }
            });
            return ret;
        }
        ContainsValue(value: TValue): boolean {
            var ret: boolean = false;
            this._list.forEach(function (val, index, theArray) {
                if (val.value == value) {
                    ret = true;
                }
            });
            return ret;
        }


        GetByKey(key: TKey): TValue {
            this._list.forEach(function (val, index, theArray) {
                if (val.key == key)
                    return val;
            });
            return null;
        }
        GetByIndex(index: number): void {
            return this._list[index];
        }
        GetAll(): void {
            return this._list;
        }

    }
}