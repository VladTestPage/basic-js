const { NotImplementedError } = require('../extensions/index.js')

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let matrixCopy = JSON.parse(JSON.stringify(matrix))
  let row = 0
  let column = 0
  let temp = []

  while (row < matrix.length) {
    while (column < matrix[0].length) {
      if (matrix[row][column] === true) {
        matrixCopy[row][column] = 1
      }
      column++
    }
    column = 0
    row++
  }

  console.log(matrix)
  column = 0
  row = 0

  while (row < matrix.length) {
    while (column < matrix[0].length) {
      console.log(matrix[row][column], 'row', row, 'column', column)
      // if (matrix[row + 1][column + 1] === true) {
      //   matrix[row][column] = 9
      // }
      // temp.push(matrix[row][column])
      if (
        row > 0 &&
        row < matrix.length - 1 &&
        column > 0 &&
        column < matrix[0].length - 1
      ) {
        temp.push(matrix[row - 1][column])
        temp.push(matrix[row - 1][column + 1])
        temp.push(matrix[row][column + 1])
        temp.push(matrix[row + 1][column + 1])
        temp.push(matrix[row + 1][column])
        temp.push(matrix[row + 1][column - 1])
        temp.push(matrix[row][column - 1])
        temp.push(matrix[row - 1][column - 1])
      }

      column++
    }
    console.log(temp, 'temp', 'row', row, 'column', column - 1)
    temp = []
    column = 0
    row++
  }

  return matrixCopy
}

const matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false],
]

console.log(minesweeper(matrix))

module.exports = {
  minesweeper,
}
