Array.prototype.ToList = function () {
    var ret = new System.Collections.Generic.List();
    for (var i = 0; i < this.length; i++)
        ret.Add(this[i]);
    return ret;
};
//# sourceMappingURL=Array.js.map
