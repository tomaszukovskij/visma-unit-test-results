const { CalculatorPr, Calculator } = require("./10");

describe("Calculator", () => {
  describe("Prototype", () => {
    test("Calculate values", () => {
      var calcPr = new CalculatorPr(0);
      const result = calcPr.add(5).multiply(2).add(20).divide(3).result;

      const expected = 10;

      expect(result).toBe(expected);
    });
  });
  describe("Obj", () => {
    test("Calculate values", () => {
      var calcObj = new Calculator(0);
      const result1 = calcObj.add(5).multiply(2).add(20).divide(3).amount();

      const expected1 = 10;

      expect(result1).toBe(expected1);
    });
  });
});
