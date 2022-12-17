Array.prototype.filter = function (callback, context) {
    let result = []
    let l = this.length
    for(let i = 0; i < l; i++) {
        if(i in this) {
            if(callback.call(context, this[i], i, this)) {
                result.push(this[i])
            }
        }
    }
    return result
}

