var System;
(function (System) {
    (function (Web) {
        (function (Mvc) {
            var SelectListItem = (function () {
                function SelectListItem(value, text, selected) {
                    this._Value = value;
                    this._Text = text;
                    this._Selected = selected;
                }
                SelectListItem.prototype.getSelected = function () {
                    return this._Selected;
                };
                SelectListItem.prototype.setSelected = function (pSelected) {
                    this._Selected = pSelected;
                };

                SelectListItem.prototype.getText = function () {
                    return this._Text;
                };
                SelectListItem.prototype.setText = function (pText) {
                    this._Text = pText;
                };

                SelectListItem.prototype.getValue = function () {
                    return this._Value;
                };
                SelectListItem.prototype.setValue = function (pValue) {
                    this._Value = pValue;
                };
                return SelectListItem;
            })();
            Mvc.SelectListItem = SelectListItem;
        })(Web.Mvc || (Web.Mvc = {}));
        var Mvc = Web.Mvc;
    })(System.Web || (System.Web = {}));
    var Web = System.Web;
})(System || (System = {}));
//# sourceMappingURL=SelectListItem.js.map
