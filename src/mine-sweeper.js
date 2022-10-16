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
  let i = 0
  let counter = 0
  let temp = []
  let matrixFlat = matrix.flat()
  let matrixZero = JSON.parse(JSON.stringify(matrix))

  // CHECKING FOR EMPTY MAP
  while (row < matrix.length) {
    while (column < matrix[0].length) {
      matrixZero[row][column] = 0
      column++
    }
    column = 0
    row++
  }

  while (i < matrixFlat.length) {
    if (matrixFlat[i] === true) {
      break
    }

    return matrixZero
  }
  // CHEKING END

  // BOMB REPLACER
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

  column = 0
  row = 0

  // END BOMB REPLACER

  // CHECKING NEIGHBOR SLOTS

  while (row < matrix.length) {
    while (column < matrix[0].length) {
      console.log(matrix[row][column], 'row', row, 'column', column)

      if (row === 0) {
        if (column === 0) {
          temp.push(matrix[row][column + 1])
          temp.push(matrix[row + 1][column + 1])
          temp.push(matrix[row + 1][column])
        } else if (column === matrix[0].length - 1) {
          temp.push(matrix[row][column - 1])
          temp.push(matrix[row + 1][column - 1])
          temp.push(matrix[row + 1][column])
        } else if (column > 0 && column < matrix[0].length) {
          temp.push(matrix[row][column - 1])
          temp.push(matrix[row + 1][column - 1])
          temp.push(matrix[row + 1][column])
          temp.push(matrix[row + 1][column + 1])
          temp.push(matrix[row][column + 1])
        }
      }

      if (row === matrix.length - 1) {
        if (column === 0) {
          temp.push(matrix[row - 1][column])
          temp.push(matrix[row - 1][column + 1])
          temp.push(matrix[row][column + 1])
        } else if (column === matrix[0].length - 1) {
          temp.push(matrix[row - 1][column])
          temp.push(matrix[row - 1][column - 1])
          temp.push(matrix[row][column - 1])
        } else if (column > 0 && column < matrix[0].length) {
          temp.push(matrix[row][column - 1])
          temp.push(matrix[row - 1][column - 1])
          temp.push(matrix[row - 1][column])
          temp.push(matrix[row - 1][column + 1])
          temp.push(matrix[row][column + 1])
        }
      }

      if (row > 0 && row < matrix.length - 1) {
        if (column === 0) {
          temp.push(matrix[row - 1][column])
          temp.push(matrix[row - 1][column + 1])
          temp.push(matrix[row][column + 1])
          temp.push(matrix[row + 1][column + 1])
          temp.push(matrix[row + 1][column])
        } else if (column === matrix[0].length - 1) {
          temp.push(matrix[row][column - 1])
          temp.push(matrix[row - 1][column - 1])
          temp.push(matrix[row - 1][column])
          temp.push(matrix[row - 1][column + 1])
          temp.push(matrix[row][column + 1])
        } else if (column > 0 && column < matrix[0].length) {
          temp.push(matrix[row - 1][column])
          temp.push(matrix[row - 1][column + 1])
          temp.push(matrix[row][column + 1])
          temp.push(matrix[row + 1][column + 1])
          temp.push(matrix[row + 1][column])
          temp.push(matrix[row + 1][column - 1])
          temp.push(matrix[row][column - 1])
          temp.push(matrix[row - 1][column - 1])
        }
      }
      console.log(temp, 'temp', 'row', row, 'column', column)

      while (i < temp.length) {
        if (temp[i] === true) {
          counter++
          matrixCopy[row][column] = counter
        }
        console.log(counter, 'counter')

        i++
      }

      console.log(matrixCopy[row][column], 'counter array')
      counter = 0
      i = 0
      column++
      temp = []
    }

    temp = []
    column = 0
    row++
  }

  return matrixCopy
}

const matrix = [
  [false, false, false],
  [false, false, false],
]

console.log(minesweeper(matrix), 'return')

module.exports = {
  minesweeper,
}
