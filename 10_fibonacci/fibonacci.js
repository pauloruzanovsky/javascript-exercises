const fibonacci = function(n) {
    if(n < 0) {
        return 'OOPS'
    }
    
    if(+n === 1) {
        return 1;
    }
    
    let a = 1;
    let b = 0;
    let sum = 0;

    for(let i = 1; i < +n; i++) {

        sum = a + b;
        b = a;
        a = sum;

    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
