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


function isPangram(str) {
    for (let char of 'abcdefghijklmnopqrstuvwxyz'){
        if (!str.includes(char)){
            return false
        }
    }
    return true
}
// isPangram("the quick brown fox jumps over the lazy dog")


function strExpand(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (!(str[i] in obj)){
            obj[str[i]] = 1;
        }
        else (obj[str[i]])++
    }
    let newStr = '';
    for (let key in obj){
        newStr += key + obj[key];
    }
    return newStr;
}
// strExpand("apple"); // "a1p2l1e1"