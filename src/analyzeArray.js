export default function analyzeArray(array) {
  const length = array.length;
  if (!length) return {};

  const min = Math.min(...array);
  const max = Math.max(...array);

  const average = array.reduce((sum, num) => sum + num, 0) / length;

  return { average, min, max, length };
}
