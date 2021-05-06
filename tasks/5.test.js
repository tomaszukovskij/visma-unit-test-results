const { wordSearch } = require("./5");

test("Search for word in text", () => {
  const result = wordSearch("hello");

  expect(result).toBeTruthy();
});
