const { say } = require("./11");

test("Return result from nested functions", () => {
  const result = say("Hello")("world");
  const expected = "Hello, world";

  expect(result).toBe(expected);
});
