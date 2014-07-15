var System;
(function (System) {
    (function (Web) {
        (function (Mvc) {
            var Html = (function () {
                function Html() {
                }
                Html.prototype.DropDownList = function (name, selectList) {
                    return "";
                };
                return Html;
            })();
            Mvc.Html = Html;
        })(Web.Mvc || (Web.Mvc = {}));
        var Mvc = Web.Mvc;
    })(System.Web || (System.Web = {}));
    var Web = System.Web;
})(System || (System = {}));
//# sourceMappingURL=Html.js.map
