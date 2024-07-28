import capitalize from "./capitalize";

test("Capitalizes empty string correctly", () => {
  expect(capitalize("")).toBe("");
});
test("Capitalizes string with numbers correctly", () => {
  expect(capitalize("1234567890")).toBe("1234567890");
});
test("Capitalizes string with special characters correctly", () => {
  expect(capitalize("!@#$")).toBe("!@#$");
});
test("Capitalizes string with uppercase alphabetical characters correctly", () => {
  expect(capitalize("ABCDEFG")).toBe("ABCDEFG");
});
test("Capitalizes string with lowercase alphabetical characters correctly", () => {
  expect(capitalize("abcdefg")).toBe("Abcdefg");
});
