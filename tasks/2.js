const arr = [1, 2];

function sum(arr) {
  let result = 0;
  for (let index = 0; index < arr.length; index++) {
    result += arr[index];
  }

  return result;
}

function sumArray(arr) {
  return arr.reduce((a, b) => a + b);
}

module.exports = {
  sum,
  sumArray,
};
