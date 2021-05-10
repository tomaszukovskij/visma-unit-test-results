function wordSearch(w) {
  // var string = "Hello World".toLowerCase();
  // w = w.toLowerCase();

  const matched = new RegExp("\\b" + "Hello World" + "\\b").test(w);

  return matched;
}

module.exports = {
  wordSearch,
};
