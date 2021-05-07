const { motto, mottoFilter } = require("./3");

describe("Return motto by house name", () => {
  const expected = "Our Blades Are Sharp";
  describe("motto", () => {
    test("Should return 'Our Blades Are Sharp' motto given a 'Bolton' name", () => {
      const result = motto("Bolton");

      expect(result).toBe(expected);
    });
  });
  describe("Motto with filter", () => {
    test("Should return 'Our Blades Are Sharp' motto given a 'Bolton' name", () => {
      const result = mottoFilter("Bolton");

      expect(result).toBe(expected);
    });
  });
});
