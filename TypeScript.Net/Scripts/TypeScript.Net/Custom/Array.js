define(["require", "exports"], function(require, exports) {
    /// <reference path="../System/Collections/Generic/Dictionary.ts" />
    
    Array.prototype.ToList = function () {
        var ret = new System.Collections.Generic.List();
        for (var i = 0, x = this.length; i < x; i++)
            ret.Add(this[i]);
        return ret;
    };
});
//# sourceMappingURL=Array.js.map
