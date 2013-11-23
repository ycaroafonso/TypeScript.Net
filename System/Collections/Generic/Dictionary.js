var System;
(function (System) {
    (function (Collections) {
        (function (Generic) {
            var Dictionary = (function () {
                function Dictionary() {
                    this._list = [];
                }
                Dictionary.prototype.Count = function () {
                    return this._list.length;
                };

                Dictionary.prototype.Add = function (key, value) {
                    if (!this.ContainsKey(key))
                        this._list.push({ "key": key, "value": value });
else
                        throw "An item with the same key has already been added.";
                };

                Dictionary.prototype.Clear = function () {
                    this._list = [];
                };
                Dictionary.prototype.ContainsKey = function (key) {
                    var ret = false;
                    this._list.forEach(function (val, index, theArray) {
                        if (val.key == key) {
                            ret = true;
                        }
                    });
                    return ret;
                };
                Dictionary.prototype.ContainsValue = function (value) {
                    var ret = false;
                    this._list.forEach(function (val, index, theArray) {
                        if (val.value == value) {
                            ret = true;
                        }
                    });
                    return ret;
                };

                Dictionary.prototype.GetByKey = function (key) {
                    this._list.forEach(function (val, index, theArray) {
                        if (val.key == key)
                            return val;
                    });
                    return null;
                };
                Dictionary.prototype.GetByIndex = function (index) {
                    return this._list[index];
                };
                Dictionary.prototype.GetAll = function () {
                    return this._list;
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
