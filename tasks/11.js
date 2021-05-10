function say(word) {
  return function say2(word2) {
    return word + ", " + word2;
  };
}

say("hello")("world");

module.exports = {
  say,
};
