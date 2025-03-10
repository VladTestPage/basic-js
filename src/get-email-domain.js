const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let result = ''
  let i = 1

  while (i < email.length) {
    if (email[email.length - i] !== '@') {
      result = email[email.length - i] + result
      i++
    } else {
      break
    }
  }

  return result
}

module.exports = {
  getEmailDomain,
}
