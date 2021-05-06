function wordSearch(w) {
  var string = "Hello World".toLowerCase();
  w = w.toLowerCase();

  return string.includes(w);
}

module.exports = {
  wordSearch,
};
