const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let row = 0
  let column = 0
  let sum = 0

  console.log(matrix[0].length)

  while (column < matrix[0].length) {
    while (row < matrix.length) {
      if (matrix[row][column] !== 0) {
        sum = sum + matrix[row][column]
        // console.log(matrix[row][column], 'row', row, 'column', column)
      } else {
        break
      }
      row++
    }
    row = 0
    column++
  }

  return sum
}

const matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]

console.log(getMatrixElementsSum(matrix))

module.exports = {
  getMatrixElementsSum,
}
