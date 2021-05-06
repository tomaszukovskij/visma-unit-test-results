const { report } = require("./8");

test("Total call", () => {
  const result = report;
  const expected = { totalCall: 4 };

  expect(result).toEqual(expected);
});
