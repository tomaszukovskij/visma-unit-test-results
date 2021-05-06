const { sum, sumArray } = require("./2");

describe("Sum numbers", () => {
  describe("sum", () => {
    test("Should return sum 1 + 2", () => {
      const result = sum(1, 2);
      const expected = 3;

      expect(result).toBe(expected);
    });
  });
  describe("Sum array", () => {
    test("Items in array should return sum e.g [1,2] = 3", () => {
      const result1 = sumArray(1, 2);
      const expected1 = 3;

      expect(result1).toBe(expected1);
    });
  });
});
