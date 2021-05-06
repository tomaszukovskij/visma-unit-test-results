const { number1 } = require("./6");

test("Takes two numbers and sums them", () => {
  const result = number1(2)(3);
  const expected = 5;

  expect(result).toBe(expected);
});
