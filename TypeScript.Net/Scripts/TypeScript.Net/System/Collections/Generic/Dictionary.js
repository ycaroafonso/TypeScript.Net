var System;
(function (System) {
    (function (Collections) {
        (function (Generic) {
            var Dictionary = (function () {
                function Dictionary() {
                    this._list = new Array();
                }
                Dictionary.prototype.Count = function () {
                    var qtde = 0;
                    this._list.forEach(function (val, index, theArray) {
                        qtde++;
                    });
                    return qtde;
                };

                Dictionary.prototype.Add = function (key, value) {
                    if (!this.ContainsKey(key)) {
                        this._list.push({ Key: key, Value: value });
                    } else
                        throw "An item with the same key has already been added.";
                };

                Dictionary.prototype.Clear = function () {
                    this._list = [];
                };
                Dictionary.prototype.ContainsKey = function (key) {
                    return this.GetByKey(key) != null;
                };
                Dictionary.prototype.ContainsValue = function (value) {
                    var ret = false;
                    this._list.forEach(function (val, index, theArray) {
                        if (val.Value == value)
                            ret = true;
                    });

                    return ret;
                };

                Dictionary.prototype.Remove = function (key) {
                    if (this.ContainsKey(key)) {
                        this._list.splice(this.GetIndexByKey(key), 1);
                        return true;
                    }
                    return false;
                };

                Dictionary.prototype.GetByKey = function (key) {
                    var ret = null;
                    this._list.forEach(function (val, index, theArray) {
                        if (val.Key == key)
                            ret = val.Value;
                    });
                    return ret;
                };
                Dictionary.prototype.GetByIndex = function (index) {
                    var ret = null;
                    this._list.forEach(function (val, i, theArray) {
                        if (i == index)
                            ret = val.Value;
                    });
                    return ret;
                };
                Dictionary.prototype.ToArray = function () {
                    return this._list;
                };

                Dictionary.prototype.GetIndexByKey = function (key) {
                    var ret = -1;
                    this._list.forEach(function (val, index, theArray) {
                        if (val.Key == key)
                            ret = index;
                    });
                    return ret;
                };

                Dictionary.ToDictionary = function (arr, key, value) {
                    if (typeof key === "undefined") { key = 0; }
                    if (typeof value === "undefined") { value = 1; }
                    var ret = new System.Collections.Generic.Dictionary();
                    arr.forEach(function (val, index, theArray) {
                        ret.Add(val[key], val[value]);
                    });
                    return ret;
                };
                return Dictionary;
            })();
            Generic.Dictionary = Dictionary;
        })(Collections.Generic || (Collections.Generic = {}));
        var Generic = Collections.Generic;
    })(System.Collections || (System.Collections = {}));
    var Collections = System.Collections;
})(System || (System = {}));
//# sourceMappingURL=Dictionary.js.map
