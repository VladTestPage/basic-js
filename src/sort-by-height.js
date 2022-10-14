const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  let arraySorted = array.slice().sort((a, b) => a - b)
  let arrayFiltered = []
  let arrayResult = []
  let i = 0
  let n = 0

  while (i < arraySorted.length) {
    if (arraySorted[i] !== -1) {
      arrayFiltered.push(arraySorted[i])
    }
    i++
  }
  i = 0

  // console.log(array)
  // console.log(arraySorted)
  // console.log(arrayFiltered)

  while (i < array.length) {
    if (array[i] === -1) {
      arrayResult.push(-1)
    } else {
      arrayResult.push(arrayFiltered[n])
      n++
    }
    i++
  }

  return arrayResult
}

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]), 'returned')

module.exports = {
  sortByHeight,
}
