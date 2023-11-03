console.log('Node is run time environment for JS'); 

let firstname='Abdullah'; //string
let lastname='Bilal';
let age =25;               //number
let isVirgin =true;        //boolean literal
console.log(firstname);

const dollarRate =230
//dollarRate='240'
console.log(dollarRate);

let person= { 
    name:'Abdullah', 
    age: 25
}
console.log(person)

//Dot Notation
person.name= 'Bilal'
console.log(person.name)

//Bracket Notation
person['name']='Abdullah Bilal'
console.log(person);

//Array

let rgbColors = ['Red', 'Green', 'Blue'];
rgbColors[3]='White'
console.log(rgbColors);
//performing a Task
function welcome (firstName, lastName){   //function declaration with parameters
  console.log('Hello! '+  firstName + ' '+ lastName); //cantenation
}

welcome('Abdullah','Bilal'); // function calling with arguments
// Calculating a value

function square (number){
    return number*number;
}

console.log(square(4));