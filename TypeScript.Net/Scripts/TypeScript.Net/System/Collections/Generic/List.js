var System;
(function (System) {
    (function (Collections) {
        (function (Generic) {
            var List = (function () {
                function List() {
                    this._list = new Array();
                }
                List.prototype.Count = function () {
                    return this._list.length;
                };

                List.prototype.Add = function (item) {
                    this._list.push(item);
                };

                List.prototype.Clear = function () {
                    this._list = new Array();
                };

                List.prototype.Get = function (index) {
                    return this._list[index];
                };

                List.prototype.ToArray = function () {
                    return this._list;
                };
                return List;
            })();
            Generic.List = List;
        })(Collections.Generic || (Collections.Generic = {}));
        var Generic = Collections.Generic;
    })(System.Collections || (System.Collections = {}));
    var Collections = System.Collections;
})(System || (System = {}));
//# sourceMappingURL=List.js.map
