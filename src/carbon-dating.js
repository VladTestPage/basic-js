const { NotImplementedError } = require('../extensions/index.js')

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !sampleActivity instanceof String) {
    return false
  }
  if (isNaN(parseFloat(sampleActivity)) && isNaN(sampleActivity - 0)) {
    return false
  }
  if (
    sampleActivity === '' ||
    sampleActivity === ' ' ||
    sampleActivity === ' \n\t\r' ||
    sampleActivity === 0 ||
    sampleActivity === null ||
    sampleActivity === undefined ||
    sampleActivity === NaN ||
    sampleActivity < 0
  ) {
    return false
  }

  const N0 = 15
  const N = Number(sampleActivity)
  const Q = Math.log(2)
  const t = 5730

  const result = Math.ceil(Math.log(N0 / N) / (Q / t))

  if (result < 0 || result === Infinity) {
    return false
  }
  return result
}

// console.log(dateSample('0'))

dateSample()
module.exports = {
  dateSample,
}
