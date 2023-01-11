var runLengthEncoding = function(str){
    let result = []
    for(let i = 0; i<str.length; i++) {
        let num = 1
        while(str[i] === str[i+1]) {
            num += 1
            i++
        }
        result.push([num, str[i]])
    }
    return result
}