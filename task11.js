function myLanguages(results) {
    let result = []
    let entries = Object.entries(results)
    entries.sort((a, b) => b[1] - a[1])
    entries.forEach(([key, value]) => {
        if(value >= 60) result.push(key)
    })
    return result
}