var arr = [1, 2, 1, 3, 4];

function mapArr(arr) {
  var newArr = [];
  arr.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });

  return newArr;
}

function filterArr(arr) {
  var newArr = arr.filter(function (element, index) {
    return arr.indexOf(element) === index;
  });

  return newArr;
}

function setArr(arr) {
  return [...new Set(arr)];
}

module.exports = {
  mapArr,
  filterArr,
  setArr,
};
