function narcissistic(value) {
    let str = value + "";
    let numLength = str.length;
    let sum = 0;
    for(let i = 0; i < numLength; i++) {
        sum += Math.pow(Number(str[i]), numLength);
    }
    return sum === value;
}
