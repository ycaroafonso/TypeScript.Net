interface IDictionary<TKey, TValue> {
    Count(): number;

    Add(key: TKey, value: TValue): void;

    Clear(): void;
    ContainsKey(value: TKey): boolean;
    ContainsValue(value: TValue): boolean;

    Remove(key: TKey): boolean;

    GetByKey(key: TKey): TValue;
    GetByIndex(index: number): TValue;
    ToArray(): any;

    GetIndexByKey(key: TKey): number;
    //ToDictionary<TKey, TValue>(arr: any, key: number, value: number): IDictionary<TKey, TValue>;
}

module System.Collections.Generic {
    export class Dictionary<TKey, TValue> implements IDictionary<TKey, TValue> {
        private _list: any;

        constructor() {
            this._list = new Array();
        }

        Count(): number {
            var qtde: number = 0;
            this._list.forEach(function (val, index, theArray) {
                qtde++;
            });
            return qtde;
        }



        Add(key: TKey, value: TValue): void {
            if (!this.ContainsKey(key)) {
                this._list.push({ Key: key, Value: value });
            } else
                throw "An item with the same key has already been added.";
        }

        Clear(): void {
            this._list = [];
        }
        ContainsKey(key: TKey): boolean {
            return this.GetByKey(key) != null;
        }
        ContainsValue(value: TValue): boolean {
            var ret: boolean = false;
            this._list.forEach(function (val, index, theArray) {
                if (val.Value == value)
                    ret = true;
            });

            return ret;
        }

        Remove(key: TKey): boolean {
            if (this.ContainsKey(key)) {
                this._list.splice(this.GetIndexByKey(key), 1);
                return true;
            }
            return false;
        }


        GetByKey(key: TKey): TValue {
            var ret: TValue = null;
            this._list.forEach(function (val, index, theArray) {
                if (val.Key == key)
                    ret = val.Value;
            });
            return ret;
        }
        GetByIndex(index: number): TValue {
            var ret: TValue = null;
            this._list.forEach(function (val, i, theArray) {
                if (i == index)
                    ret = val.Value;
            });
            return ret;
        }
        ToArray(): any {
            return this._list;
        }

        GetIndexByKey(key: TKey): number {
            var ret: number = -1;
            this._list.forEach(function (val, index, theArray) {
                if (val.Key == key)
                    ret = index;
            });
            return ret;
        }

        public static ToDictionary<TKey, TValue>(arr: any, key: number = 0, value: number = 1): IDictionary<TKey, TValue> {
            var ret = new System.Collections.Generic.Dictionary<TKey, TValue>();
            arr.forEach(function (val, index, theArray) {
                ret.Add(val[key], val[value]);
            });
            return ret;
        }

    }
}