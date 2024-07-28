import caesarCipher from "./caesarCipher";

test("Correctly ciphers empty string", () => {
  expect(caesarCipher("", 12)).toBe("");
});
test("Correctly ciphers normal string", () => {
  expect(caesarCipher("a", 7)).toBe("h");
});
test("Correctly ciphers normal string  with wrapping", () => {
  expect(caesarCipher("hello world", 7)).toBe("olssv dvysk");
});
test("TOP: Wraps correctly", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
test("TOP: Case is preserved", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});
test("TOP: Punctuation is unchanged", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
