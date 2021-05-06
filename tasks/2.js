function sum(a, b) {
  return a + b;
}

function sumArray(num1, num2) {
  return [num1, num2].reduce((a, b) => a + b);
}

module.exports = {
  sum,
  sumArray,
};
