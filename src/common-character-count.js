const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

// const stringFirst = 'a'
// const stringSecond = 'b'

function getCommonCharacterCount(stringFirst, stringSecond) {
  let result = 0
  let i = 0
  let counter = 0

  let shortestStringTemp =
    stringFirst.length <= stringSecond.length ? stringFirst : stringSecond
  let longestStringTemp =
    stringFirst.length > stringSecond.length ? stringFirst : stringSecond

  while (counter < shortestStringTemp.length) {
    while (i < longestStringTemp.length) {
      // console.log(shortestStingTemp[counter], '/S/', longestStingTemp[i], '/L/')
      if (shortestStringTemp[counter] === longestStringTemp[i]) {
        result++
        // console.log('MATCH')
        longestStringTemp =
          longestStringTemp.slice(0, i) + longestStringTemp.slice(i + 1)
        // console.log(longestStingTemp)
        break
      }
      i++
    }
    i = 0
    counter++
  }
  return result
}

module.exports = {
  getCommonCharacterCount,
}
