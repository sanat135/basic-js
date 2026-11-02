function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const commands = new Set([
    '--discard-next', '--discard-prev', '--double-next', '--double-prev',
  ]);
  const copies = arr.map((value) => commands.has(value) ? 0 : 1);
  arr.forEach((value, index) => {
    if (!commands.has(value)) return;
    const target = value.endsWith('next') ? index + 1 : index - 1;
    if (target < 0 || target >= arr.length || copies[target] === 0) return;
    copies[target] += value.startsWith('--double') ? 1 : -1;
  });
  return arr.flatMap((value, index) => Array(copies[index]).fill(value));
}

module.exports = { transform };
