const { sumArray } = require("./9");

test("Return sum", () => {
  const arr = [10, 6, [4, 8], 3, [6, 5, [9]]];
  const result = sumArray(arr);
  const expected = 51;

  expect(result).toBe(expected);
});
