// Let's say take 2 strings, A and B, and define the similarity of the strings to be the length of the longest prefix common to both strings. For example, the similarity of strings abc and abd is 2, while the similarity of strings aaa and aaab is 3.

// write a function that calculates the sum of similarities of a string S with each of it's suffixes.

// Examples (input -> output):
// 'ababaa' -> 11
// 'abc' -> 3
// Explanation:

// In the first case, the suffixes of the string are ababaa, babaa, abaa, baa, aa and a. The similarities of each of these strings with the string ababaa are 6,0,3,0,1,1 respectively. Thus the answer is 6 + 0 + 3 + 0 + 1 + 1 = 11.

// For the second case, the answer is simply 3 + 0 + 0 = 3.

// Note : Each string will have at least one character - no need to check for empty strings :)

function stringSuffix(s) {
    let res = 0
    for(let i = 0; i < s.length; i++) {
        let suffics = s.slice(i)
        for(let j = 0; j < suffics.length; j++) {
            if(suffics[j] === s[j]) {
                res++
                continue
            }
            break
        }
    }
    return res
  }

    console.log(stringSuffix('aa')) //3
    console.log(stringSuffix('abc'))//3
    console.log(stringSuffix('ababaa'))//11
    console.log(stringSuffix('aaaa'))//10
    console.log(stringSuffix('aaaaa'))//15