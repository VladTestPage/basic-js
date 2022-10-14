const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(string) {
  let result = ''
  let i = 0
  let counter = 0
  let stringCut = string
  let tempString = ''

  while (stringCut.length > 0) {
    while (i < string.length) {
      if (stringCut[i] === stringCut[i + 1]) {
        counter++
        tempString = tempString + counter + stringCut[i]
      } else {
        counter++
        tempString = tempString + counter + stringCut[i]
        break
      }
      i++
    }
    i = 0
    stringCut = stringCut.slice(counter)
    counter = 0

    result =
      result +
      tempString[tempString.length - 2] +
      tempString[tempString.length - 1]
    tempString = ''
  }

  return result.replace(/1/g, '')
}

// console.log(encodeLine('abbcca'), 'returned')

module.exports = {
  encodeLine,
}
