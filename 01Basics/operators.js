let isVerified = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (isVerified && isLoggedIn && hasPaymentToken) {
    console.log('Greeting message to user')
    console.log('Grant access to paid course')
}
else if (isVerified || isGuest) {
    console.log('Allow the Previous')
}
else {
    console.log('Message: Please Contact admin ')
}