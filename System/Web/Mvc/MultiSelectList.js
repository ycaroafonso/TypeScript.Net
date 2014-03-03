var System;
(function (System) {
    (function (Web) {
        (function (Mvc) {
            var MultiSelectList = (function () {
                function MultiSelectList(items, dataValueField, dataTextField, selectedValue) {
                    this._Items = items;
                    this._DataValueField = dataValueField;
                    this._DataTextField = dataTextField;
                }
                MultiSelectList.prototype.Items = function () {
                    return this._Items;
                };

                MultiSelectList.prototype.GetEnumerator = function () {
                    var ret = new System.Collections.Generic.List();

                    for (var x = 0; x < this._Items.length; x++) {
                        var n = new System.Web.Mvc.SelectListItem();
                        n.setValue(this._Items[this._DataValueField]);
                        n.setText(this._Items[this._DataTextField]);
                        ret.Add(n);
                    }
                    return ret;
                };
                return MultiSelectList;
            })();
            Mvc.MultiSelectList = MultiSelectList;
        })(Web.Mvc || (Web.Mvc = {}));
        var Mvc = Web.Mvc;
    })(System.Web || (System.Web = {}));
    var Web = System.Web;
})(System || (System = {}));
//# sourceMappingURL=MultiSelectList.js.map
