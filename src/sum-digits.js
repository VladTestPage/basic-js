const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(number) {
  let numberArray = ('' + number).split('').map(Number)
  let arraySum

  // console.log(numberArray)

  while (numberArray.length > 1) {
    arraySum = numberArray.reduce((a, b) => a + b, 0)
    numberArray = ('' + arraySum).split('').map(Number)
    console.log(numberArray)
  }

  return numberArray[0]
}

// console.log(getSumOfDigits(91), 'return')

module.exports = {
  getSumOfDigits,
}
