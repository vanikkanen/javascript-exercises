const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((acc, val) => acc + val, 0)
};

const multiply = function (arr) {
  return arr.reduce((acc, val) => acc*val, 1)
};

const power = function (num, power) {

  if (power === 0) return 1

  let ans = 1
  for(let i = 0; i < power; i++) {
    ans *= num
  }
  return ans
};

const factorial = function (num) {

  let ans = 1
  while (num > 0) {
    ans *= num
    num--
  }
  return ans

};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
