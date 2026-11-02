function getDNSStats(domains) {
  const result = {};
  for (const domain of domains) {
    let path = '';
    for (const part of domain.split('.').reverse()) {
      path += `.${part}`;
      result[path] = (result[path] || 0) + 1;
    }
  }
  return result;
}

module.exports = { getDNSStats };
