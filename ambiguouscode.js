// This code works
// How would you refactor it to make it less ambiguous?

const MIN_PASSWORD = 6

function checkPasswordLength(password) {
    return password.length >= MIN_PASSWORD
}
















// Possible Refactor
const MIN_PASSWORD_LENGTH = 6

function isPasswordLongEnough(password) {
    return password.length >= MIN_PASSWORD_LENGTH
}
