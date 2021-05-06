function rangeArr(a, b) {
  const array = [];

  for (let index = a; index <= b; index++) {
    array.push(index);
  }

  return array;
}

function rangeWhile(a, b) {
  var arr = [];
  while (a <= b) {
    arr.push(a++);
  }

  return arr;
}

module.exports = {
  rangeArr,
  rangeWhile,
};
