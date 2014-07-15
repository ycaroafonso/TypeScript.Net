/// <reference path="../System/Collections/Generic/Dictionary.ts" />

export interface Array {
    ToList(): System.Collections.Generic.List<any>;
}
Array.prototype.ToList = function () {
    var ret = new System.Collections.Generic.List<any>();
    for (var i: number = 0, x: number = this.length; i < x; i++)
        ret.Add(this[i]);
    return ret;
}