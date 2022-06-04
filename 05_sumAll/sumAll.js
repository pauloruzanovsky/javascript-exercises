const sumAll = function(min, max) {
    let sum = 0;
    let first = min;
    let last = max;

    if (min > max){
        first = max;
        last = min;
    }

    if (min < 0 || max < 0 || typeof(min) !== 'number' || typeof(max) !=='number') {
        return 'ERROR'
    }

    for (let i = first; i <= last; i++) {
        sum += i;
}   
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
