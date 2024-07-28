import reverseString from "./reverseString";

test("Reverses empty string correctly", () => {
  expect(reverseString("")).toBe("");
});
test("Reverses palindromes correctly", () => {
  expect(reverseString("madam")).toBe("madam");
});
test("Reverses normal strings", () => {
  expect(reverseString("abcdefg")).toBe("gfedcba");
});
