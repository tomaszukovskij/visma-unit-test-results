const { rangeArr, rangeWhile } = require("./1");

describe("Return range to array", () => {
  describe("For loop", () => {
    test("Should return an array filled with all numbers from x (inclusive) to y (exclusive)", () => {
      const result = rangeArr(1, 5);
      const expected = [1, 2, 3, 4, 5];

      expect(result).toStrictEqual(expected);
    });
  });
  describe("While loop", () => {
    test("Should return an array filled with all numbers from x (inclusive) to y (exclusive)", () => {
      const result1 = rangeWhile(1, 5);
      const expected1 = [1, 2, 3, 4, 5];

      expect(result1).toStrictEqual(expected1);
    });
  });
});
