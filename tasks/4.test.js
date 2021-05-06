const { mapArr, filterArr } = require("./4");

describe("Remove duplicates", () => {
  describe("Map", () => {
    test("Should return array without duplicates using map", () => {
      const result = mapArr([1, 1, 2, 3, 4]);
      const expected = [1, 2, 3, 4];

      expect(result).toStrictEqual(expected);
    });
  });
  describe("Filter", () => {
    test("Should return array without duplicates using filter", () => {
      const result1 = filterArr([1, 1, 2, 3, 4]);
      const expected1 = [1, 2, 3, 4];

      expect(result1).toStrictEqual(expected1);
    });
  });
});
