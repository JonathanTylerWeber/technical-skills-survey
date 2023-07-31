function calculateAverage(numbers) {
    if(numbers.length === 0){
        return 0
    }
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum /= numbers.length
}
// calculateAverage([1,3,2])

function dedupe(numbers) {
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (!arr.includes(numbers[i])){
            arr.push(numbers[i])
        }
    }
    return arr
}
// dedupe([1,2,4,4,1,2]) // [1,2,4]