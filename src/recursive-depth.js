class DepthCalculator {
  calculateDepth(arr) {
    return arr.reduce((depth, value) => {
      return Array.isArray(value)
        ? Math.max(depth, 1 + this.calculateDepth(value))
        : depth;
    }, 1);
  }
}

module.exports = { depthCalculator: new DepthCalculator() };
