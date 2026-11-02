function renameFiles(names) {
  const used = new Set();
  return names.map((name) => {
    let candidate = name;
    let suffix = 1;
    while (used.has(candidate)) {
      candidate = `${name}(${suffix})`;
      suffix += 1;
    }
    used.add(candidate);
    return candidate;
  });
}

module.exports = { renameFiles };
