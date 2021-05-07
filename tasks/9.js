const arr = [10, 6, [4, 8], 3, [6, 5, [9]]];

function sumArray(array) {
  array = array.flat(Infinity);
  return array.reduce((a, b) => a + b);
}

module.exports = {
  sumArray,
};
