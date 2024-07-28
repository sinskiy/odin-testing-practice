import { add, divide, multiply, subtract } from "./calculator";

test("Adds correctly", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(1, 1)).toBe(2);
  expect(add(1, -1)).toBe(0);
  expect(add(0, 2)).toBe(2);
  expect(add(0, 0)).toBe(0);
});

test("Substracts correctly", () => {
  expect(subtract(1, 1)).toBe(0);
  expect(subtract(1, 2)).toBe(-1);
  expect(subtract(1, -1)).toBe(2);
  expect(subtract(0, 2)).toBe(-2);
  expect(subtract(0, 0)).toBe(0);
});

test("Divides correctly", () => {
  expect(divide(1, 1)).toBe(1);
  expect(divide(42, 3)).toBe(14);
  expect(divide(0, 44)).toBe(0);
  expect(divide(-0, 44)).toBe(-0);
  expect(divide(12, 0)).toBe(Infinity);
  expect(divide(12, -0)).toBe(-Infinity);
  expect(divide(-12, -0)).toBe(Infinity);
  expect(divide(0, 0)).toBe(NaN);
});

test("Multiplies correctly", () => {
  expect(multiply(1, 1)).toBe(1);
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(2, 0)).toBe(0);
  expect(multiply(2, -0)).toBe(-0);
  expect(multiply(-2, 0)).toBe(-0);
  expect(multiply(-2, -0)).toBe(0);
  expect(multiply(0, 0)).toBe(0);
});
