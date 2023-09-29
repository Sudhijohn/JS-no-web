const { testThis, testThisArrow } = require("./functions.js");

test("First Test", () => {
  expect(testThis()).toBe(undefined);
  expect(testThisArrow()).not.toBe(undefined);
});
