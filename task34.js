// Create a function that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

// Example (Input --> Output)

// "drake" --> "drk"
// "aeiou" --> ""
// remove_vowels("drake") // => "drk"
// remove_vowels("aeiou") // => ""

var removeVowels = function(str){
    let vowels = ["a","e","i",'o','u']
      let res = ""
      for(let i = 0; i < str.length; i++) {
        if(!vowels.includes(str[i])) {
           res += str[i]
        }
      }
    return res
    }

    console.log(removeVowels("drake"))
    console.log(removeVowels("aeiou"))
