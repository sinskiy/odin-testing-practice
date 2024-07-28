const ALPHABET_LENGTH = "z".charCodeAt(0) + 1 - "a".charCodeAt(0);

export default function caesarCipher(string, factor) {
  let output = "";
  for (const char of string) {
    output += shiftChar(char, factor);
  }
  return output;
}

function shiftChar(char, factor) {
  if (isString(char)) {
    const upper = char === char.toUpperCase();
    const biggestCharCode = (upper ? "Z" : "z").charCodeAt(0);

    const charCode = char.charCodeAt(0);
    const newCharCode = charCode + factor;
    const wrappedCharCode =
      newCharCode > biggestCharCode
        ? newCharCode - ALPHABET_LENGTH
        : newCharCode;

    const newChar = String.fromCharCode(wrappedCharCode);
    return newChar;
  }

  return char;
}

function isString(char) {
  return char.toLowerCase() !== char.toUpperCase();
}
