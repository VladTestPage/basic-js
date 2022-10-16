const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {
  if (array === null || array === undefined) {
    return false
  }

  let arrayFiltredFromTypes = []
  let arrayFiltredFromSapces = []
  let i = 0
  let string = ''
  let stringSorted = ''

  while (i < array.length) {
    if (typeof array[i] === 'string') {
      arrayFiltredFromTypes.push(array[i])
    }
    i++
  }

  i = 0

  while (i < arrayFiltredFromTypes.length) {
    arrayFiltredFromSapces.push(arrayFiltredFromTypes[i].trim())
    i++
  }

  i = 0

  while (i < arrayFiltredFromSapces.length) {
    string = string + arrayFiltredFromSapces[i].slice(0, 1).toUpperCase()
    i++
  }

  stringSorted = string.split('').sort().join('')

  return stringSorted
}

module.exports = {
  createDreamTeam,
}
