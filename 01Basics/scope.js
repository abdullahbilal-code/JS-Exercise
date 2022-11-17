let iAmGlobal = 'someValue'

if (true) {
    var iamlocal = 'someMoreValue'
    iAmGlobal = 'Super Man'
    console.log(iAmGlobal)
    console.log(iamlocal)
}

console.log(iAmGlobal)
console.log(iamlocal)