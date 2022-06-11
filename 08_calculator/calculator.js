const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
  return array.reduce((acumulador, currentValue) => acumulador + currentValue, 0)
  };

const multiply = function(array) {
  return array.reduce((acumulador, currentValue) => acumulador * currentValue, 1)
  };


const power = function(a,b) {
  return a**b;

};

const factorial = function(a) {
  let startNumber = a;
  let answer = 1;
  for (i = a; i > 0; i--) {
    answer *= startNumber;
    startNumber--;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
