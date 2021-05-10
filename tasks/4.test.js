const { mapArr, filterArr, setArr } = require("./4");

describe("Remove duplicates", () => {
  const expected = [1, 2, 3, 4];
  describe("Map", () => {
    test("Should return array without duplicates using map", () => {
      const result = mapArr([1, 1, 2, 3, 4]);

      expect(result).toStrictEqual(expected);
    });
  });
  describe("Filter", () => {
    test("Should return array without duplicates using filter", () => {
      const result = filterArr([1, 1, 2, 3, 4]);

      expect(result).toStrictEqual(expected);
    });
  });
  describe("Set", () => {
    test("Should return array without duplicates using set", () => {
      const result = setArr([1, 1, 2, 3, 4]);

      expect(result).toStrictEqual(expected);
    });
  });
});
