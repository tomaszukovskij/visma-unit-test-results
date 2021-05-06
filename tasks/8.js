function spy(fn) {
  let count = 0;
  return function wrap() {
    count++;
    wrap.report = function () {
      return fn(count);
    };
  };
}

function myFn(number) {
  return { totalCall: number };
}

var spied = spy(myFn);

spied(2);
spied(2);
spied(2);
spied(2);

var report = spied.report();

module.exports = {
  report,
};
