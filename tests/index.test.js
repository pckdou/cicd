const { add } = require("../src/index");

test("1 + 2 = 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("음수 덧셈", () => {
  expect(add(-1, -2)).toBe(-3);
});