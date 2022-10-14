const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  let result = 0
  let i = 0

  let numberString = number.toString()
  let temp

  while (i < numberString.length) {
    temp = numberString.slice(0, i) + numberString.slice(i + 1)
    i++
    result = Number(temp) < result ? result : Number(temp)
  }

  return result
}

module.exports = {
  deleteDigit,
}
