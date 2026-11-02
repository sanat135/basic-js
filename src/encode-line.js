function encodeLine(str) {
  let result = '';
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    count += 1;
    if (str[i] !== str[i + 1]) {
      result += (count > 1 ? count : '') + str[i];
      count = 0;
    }
  }
  return result;
}

module.exports = { encodeLine };
