function unluckyDays(year){
    let unlucky = 0
    for(let i = 0; i < 12; i++) {
        unlucky += new Date(year, i, 13).getDay() === 5 ? 1 : 0
    }
    return unlucky
}