/// <reference path="../System/Collections/Generic/Dictionary.ts" />
interface Array {
    ToList(): System.Collections.Generic.List<any>;
}

Array.prototype.ToList = function (): System.Collections.Generic.List<any> {
    var ret = new System.Collections.Generic.List<any>();
    for (var i: number = 0; i < this.length; i++)
        ret.Add(this[i]);
    return ret;
}