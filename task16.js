// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    let arr = num.toString().split('')
    if (arr.length === 1) return 0
    let newNum = arr.reduce((a, b) => a * b, 1)
    return 1 + persistence(newNum)
}