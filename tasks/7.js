function sevenAte9(str) {
  str = str.toString().replace(/79(?=7)/g, "7");

  return str;
}

module.exports = {
  sevenAte9,
};
