const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(array) {
  if (!Array.isArray(array)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  let i = 0
  let arrayResult = JSON.parse(JSON.stringify(array))

  while (i < arrayResult.length) {
    if (arrayResult[i] === '--double-next') {
      arrayResult[i] = arrayResult[i + 1]
    } else if (arrayResult[i] === '--double-prev') {
      arrayResult[i] = arrayResult[i - 1]
    } else if (arrayResult[i] === '--discard-next') {
      arrayResult.splice(i, 2)
    } else if (arrayResult[0] === '--discard-prev') {
      arrayResult.splice(i, 1)
    } else if (arrayResult[i] === '--discard-prev') {
      arrayResult.splice(i - 1, 2)
    }
    console.log(arrayResult)
    i++
  }

  i = 0
  while (i < arrayResult.length) {
    if (
      arrayResult[i] === '--double-next' ||
      arrayResult[i] === '--double-prev' ||
      arrayResult[i] === '--discard-next' ||
      arrayResult[i] === '--discard-prev' ||
      arrayResult[i] === undefined
    ) {
      arrayResult.splice(i, 1)
    } else {
      ++i
    }
  }

  return arrayResult
}

// console.log(transform([]))
// console.log(transform(3))

module.exports = {
  transform,
}
