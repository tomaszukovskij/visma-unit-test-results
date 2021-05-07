function rangeArr(a, b) {
  const isHeigher = a > b;
  const length = isHeigher ? a - b : b - a;

  return Array.from({ length }, (v, i) => {
    return isHeigher ? a - i : a + i;
  });
}

function rangeWhile(a, b) {
  var arr = [];
  while (a < b) {
    arr.push(a++);
  }

  return arr;
}

module.exports = {
  rangeArr,
  rangeWhile,
};
