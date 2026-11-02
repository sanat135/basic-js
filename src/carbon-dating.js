const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  const activity = Number(sampleActivity);
  if (!Number.isFinite(activity) || activity <= 0 || activity > MODERN_ACTIVITY) {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / activity) * HALF_LIFE_PERIOD / Math.LN2);
}

module.exports = { dateSample };
