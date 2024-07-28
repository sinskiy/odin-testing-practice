import analyzeArray from "./analyzeArray";

test("Works correctly on empty array", () => {
  expect(analyzeArray([])).toEqual({});
});
test("Works correctly on array  with single item", () => {
  expect(analyzeArray([0])).toEqual({ average: 0, min: 0, max: 0, length: 1 });
});
test("Works correctly on array  with multiple items", () => {
  expect(analyzeArray([252, 102, 93, 0, 42, 12])).toEqual({
    average: 83.5,
    min: 0,
    max: 252,
    length: 6,
  });
});
test("Works correctly on array  with multiple items including negatives", () => {
  expect(analyzeArray([-202, 873, 99, -75, -80])).toEqual({
    average: 123,
    min: -202,
    max: 873,
    length: 5,
  });
});
