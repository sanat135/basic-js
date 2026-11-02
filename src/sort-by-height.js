function sortByHeight(arr) {
  const heights = arr.filter((value) => value !== -1).sort((a, b) => a - b);
  let index = 0;
  return arr.map((value) => {
    if (value === -1) return -1;
    const height = heights[index];
    index += 1;
    return height;
  });
}

module.exports = { sortByHeight };
