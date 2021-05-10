const { sum, sumArray } = require("./2");

describe("Sum numbers", () => {
  const arrForSum = [1, 3];
  const expected = 4;
  describe("sum", () => {
    test("Should return sum 1 + 2", () => {
      const result = sum(arrForSum);

      expect(result).toBe(expected);
    });
  });
  describe("Sum array", () => {
    test("Items in array should return sum e.g [1,2] = 3", () => {
      const result = sumArray(arrForSum);

      expect(result).toBe(expected);
    });
  });
});
