var arr = [1, 2, 1, 3, 4];

function mapArr(arr) {
  var newArr = [];
  arr.map(function (x) {
    if (!newArr.includes(x)) {
      newArr.push(x);
    }
  });

  return newArr;
}

function filterArr(arr) {
  var newArr = arr.filter(function (a, b) {
    return arr.indexOf(a) === b;
  });

  return newArr;
}

module.exports = {
  mapArr,
  filterArr,
};
