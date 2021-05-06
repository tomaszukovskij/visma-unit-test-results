const { motto, mottoFilter } = require("./3");

describe("Return motto by house name", () => {
  describe("motto", () => {
    test("Should return Our Blades Are Sharp", () => {
      const result = motto("Bolton");
      const expected = "Our Blades Are Sharp";

      expect(result).toBe(expected);
    });
  });
  describe("Motto with filter", () => {
    test("Should return Our Blades Are Sharp", () => {
      const result1 = mottoFilter("Bolton");
      const expected1 = "Our Blades Are Sharp";

      expect(result1).toBe(expected1);
    });
  });
});
