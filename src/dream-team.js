function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members
    .filter((name) => typeof name === 'string' && name.trim().length > 0)
    .map((name) => name.trim()[0].toUpperCase())
    .sort()
    .join('');
}

module.exports = { createDreamTeam };
