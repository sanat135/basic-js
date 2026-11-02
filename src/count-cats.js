function countCats(matrix) {
  return matrix.reduce((total, row) =>
    total + row.filter((cell) => cell === '^^').length, 0);
}

module.exports = { countCats };
