function number1(a) {
  return function number2(b) {
    return a + b;
  };
}

number1(2)(3);

module.exports = {
  number1,
};
