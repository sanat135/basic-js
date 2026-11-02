function minesweeper(matrix) {
  return matrix.map((row, r) => row.map((cell, c) => {
    let count = 0;
    for (let dr = -1; dr <= 1; dr += 1) {
      for (let dc = -1; dc <= 1; dc += 1) {
        if (dr === 0 && dc === 0) continue;
        if (matrix[r + dr] && matrix[r + dr][c + dc] === true) count += 1;
      }
    }
    return count;
  }));
}

module.exports = { minesweeper };
