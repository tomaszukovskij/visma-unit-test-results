function spy(fn) {
  let count = 0;
  return function wrap() {
    count++;
    wrap.report = function () {
      return fn(count);
    };
  };
}

module.exports = {
  spy,
};
