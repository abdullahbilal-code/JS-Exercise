//datatype - Array 



// const superHeros = ['Iron man ', 'Spider Man', 'BatsMan', 'Captain America']

// console.log(superHeros)
// console.log(superHeros[0])
// console.log(superHeros[1])
// console.log(superHeros[superHeros.length - 1]);
// console.log(`We have ${superHeros[superHeros.length - 2]} as Super Hero`);

const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

// numbers[1] = 'Kapi'
// console.log(numbers)


//start p1
//console.log(numbers.shift());  //delet value from right side
// numbers.unshift('RAW')        // add value on right side
// console.log(numbers);

//end p2

// //console.log(numbers.join('--'));      // Join Array Indexes with special characters

// console.log(numbers);   // Add value in array at left side
// console.log('The element to be deleted is :  ' + numbers.pop())

// numbers.push('Seven')  // Remove value from left side

// console.log(numbers)   

//Middle p3

numbers.splice(2, 2, 'Deleted Index',);
console.log(numbers);
