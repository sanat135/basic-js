function getCommonCharacterCount(s1, s2) {
  const counts = new Map();
  for (const char of s1) counts.set(char, (counts.get(char) || 0) + 1);
  let total = 0;
  for (const char of s2) {
    if (counts.get(char) > 0) {
      total += 1;
      counts.set(char, counts.get(char) - 1);
    }
  }
  return total;
}

module.exports = { getCommonCharacterCount };
