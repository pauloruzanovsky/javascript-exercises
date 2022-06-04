const removeFromArray = function(array, ...args) {
    return array.filter(arrayItem => !args.includes(arrayItem));
};

// Do not edit below this line
module.exports = removeFromArray;
