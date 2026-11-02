function repeater(str, options = {}) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;
  const extra = Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator);
  return Array(repeatTimes).fill(String(str) + extra).join(separator);
}

module.exports = { repeater };
