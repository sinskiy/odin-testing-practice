import capitalize from "./capitalize";

test("Capitalizes empty string", () => {
  expect(capitalize("")).toBe("");
});
