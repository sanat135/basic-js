function getMatrixElementsSum(matrix) {
  const blocked = new Set();
  let total = 0;
  for (const row of matrix) {
    row.forEach((value, column) => {
      if (value === 0) blocked.add(column);
      if (!blocked.has(column)) total += value;
    });
  }
  return total;
}

module.exports = { getMatrixElementsSum };
