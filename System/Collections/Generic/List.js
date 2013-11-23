var System;
(function (System) {
    (function (Collections) {
        (function (Generic) {
            var List = (function () {
                function List() {
                    this._list = [];
                }
                List.prototype.Count = function () {
                    return this._list.length;
                };

                List.prototype.Add = function (item) {
                    this._list.push(item);
                };

                List.prototype.Clear = function () {
                    this._list = [];
                };

                List.prototype.Get = function (index) {
                    return this._list[index];
                };
                return List;
            })();
            Generic.List = List;
        })(Collections.Generic || (Collections.Generic = {}));
        var Generic = Collections.Generic;
    })(System.Collections || (System.Collections = {}));
    var Collections = System.Collections;
})(System || (System = {}));
