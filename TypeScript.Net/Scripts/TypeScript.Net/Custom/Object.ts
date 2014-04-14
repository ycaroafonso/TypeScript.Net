interface Object {
    IsNullOrEmpty(): boolean;
}


Object.prototype.IsNullOrEmpty = function (): boolean {
    return this == null || this.length == 0;
}