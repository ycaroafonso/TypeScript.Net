var System;
(function (System) {
    (function (Web) {
        (function (Mvc) {
            var SelectList = (function () {
                function SelectList(itens, dataValueField, dataTextField, selectedValue) {
                    this._DataValueField = dataValueField;
                    this._DataTextField = dataTextField;
                    this._SelectedValue = selectedValue;

                    this._Itens = new System.Collections.Generic.List();
                    for (var x = 0; x < itens.length; x++) {
                        var list = new System.Web.Mvc.SelectListItem();
                        list.setValue(itens[dataValueField]);
                        list.setText(itens[dataTextField]);
                        this._Itens.Add(list);
                    }
                }
                SelectList.prototype.SelectedValue = function () {
                    return this._SelectedValue;
                };

                SelectList.prototype.GetEnumerator = function () {
                    return this._Itens;
                };
                return SelectList;
            })();
            Mvc.SelectList = SelectList;
        })(Web.Mvc || (Web.Mvc = {}));
        var Mvc = Web.Mvc;
    })(System.Web || (System.Web = {}));
    var Web = System.Web;
})(System || (System = {}));
//# sourceMappingURL=SelectList.js.map
