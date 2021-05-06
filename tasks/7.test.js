const { sevenAte9 } = require("./7");

test("Removes each 9 that it is in between 7s", () => {
  const result = sevenAte9("79797");
  const expected = "777";

  expect(result).toBe(expected);
});
