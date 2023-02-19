// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.
//
//     Note:
//
// Empty string values should be ignored.
//     Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
//     Example: (Input --> output)
//
//     ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
//     ['ninja', '', 'ronin'] --> "ninja and ronin"
//     [] -->""

function formatWords(words){
    if(words === null || words.length === 0) return ''

    let str = words.filter(s => s!=='').join(', ')
    let lastComma = str.lastIndexOf(',')

    if(lastComma !== -1) {
        return str.slice(0, lastComma) + str.slice(lastComma).replace(",", ' and')
    }
    return str
}

console.log(formatWords(['one', '', 'three']))