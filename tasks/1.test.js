const { rangeArr, rangeWhile } = require("./1");

describe("Return range to array", () => {
  const expected = [1, 2, 3, 4];
  describe("For loop", () => {
    test("Should return an array filled with all numbers from x (inclusive) to y (exclusive)", () => {
      const result = rangeArr(1, 5);

      expect(result).toStrictEqual(expected);
    });
  });
  describe("While loop", () => {
    test("Should return an array filled with all numbers from x (inclusive) to y (exclusive)", () => {
      const result = rangeWhile(1, 5);

      expect(result).toStrictEqual(expected);
    });
  });
});
