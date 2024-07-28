export default function capitalize(string) {
  const firstCharacter = string.slice(0, 1);
  const restCharacters = string.slice(1);
  return `${firstCharacter.toUpperCase()}${restCharacters}`;
}
