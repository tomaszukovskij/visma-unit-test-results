const { CalculatorPr, Calculator } = require("./10");

describe("Calculator", () => {
  const expected = 10;
  describe("Prototype", () => {
    test("Calculate values, result should be 10", () => {
      const calcPr = new CalculatorPr(0);
      const result = calcPr.add(5).multiply(2).add(20).divide(3).result;

      expect(result).toBe(expected);
    });
  });
  describe("Obj", () => {
    test("Calculate values, result should be 10", () => {
      const calcObj = new Calculator(0);
      const result = calcObj.add(5).multiply(2).add(20).divide(3).amount();

      expect(result).toBe(expected);
    });
  });
});
