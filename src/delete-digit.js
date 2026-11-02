function deleteDigit(n) {
  const digits = String(n);
  let maximum = 0;
  for (let i = 0; i < digits.length; i += 1) {
    maximum = Math.max(maximum, Number(digits.slice(0, i) + digits.slice(i + 1)));
  }
  return maximum;
}

module.exports = { deleteDigit };
