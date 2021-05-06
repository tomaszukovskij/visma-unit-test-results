const arr = [10, 6, [4, 8], 3, [6, 5, [9]]];

function sumArray(array) {
  let sum = 0;
  array.forEach((item) => {
    if (Array.isArray(item)) {
      sum += sumArray(item);
    } else {
      sum += item;
    }
  });
  return sum;
}

module.exports = {
  sumArray,
};
