const reverseString = function(string) {
    let arrayString = string.split("");
    let arrayReverse = arrayString.reverse();
    let newString = arrayReverse.join("");
    return newString;

};

// Do not edit below this line
module.exports = reverseString;
