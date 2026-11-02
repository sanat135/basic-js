function getSumOfDigits(n) {
  let result = n;
  while (result >= 10) {
    result = String(result).split('').reduce((sum, digit) => sum + Number(digit), 0);
  }
  return result;
}

module.exports = { getSumOfDigits };
