// This code works
// How would you refactor it to make it less ambiguous?

const MIN_PASSWORD = 6

function checkPasswordLength(password) {
    return password.length >= MIN_PASSWORD
}
