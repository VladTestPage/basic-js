const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  const arrayFlat = backyard.flat()
  let result = 0
  let i = 0

  while (i < arrayFlat.length) {
    if (arrayFlat[i] === '^^') {
      result++
    }
    i++
  }

  return result
}

module.exports = {
  countCats,
}
