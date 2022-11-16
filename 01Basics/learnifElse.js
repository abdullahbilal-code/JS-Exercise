// if (false) {
//     console.log('I am inside if Block ')
//     console.log('I am still  inside if Block ')
// }
// else if (false) {
//     console.log('I am in else If Block')
// }
// else {
//     console.log('I am not inside of If Block')
// }
var whoIsHere = 'abc'

if (whoIsHere == 'user') {
    console.log('Greeting message for users')
    console.log('Allow access to view all courses')
}
else if (whoIsHere == 'teacher') {
    console.log('Greeting message for TEACHER')
    console.log('Allow access to his course')
}
else {
    console.log('MESSAGE: Please verify your email')
    console.log('Send User Email Verification')
}