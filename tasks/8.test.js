const { spy } = require("./8");

test("Count how many times function was called. Output result from another function", () => {
  function myFn(number) {
    return { totalCall: number };
  }

  var spied = spy(myFn);

  spied();
  spied();
  spied();
  spied();

  const result = spied.report();
  const expected = { totalCall: 4 };

  expect(result).toEqual(expected);
});
