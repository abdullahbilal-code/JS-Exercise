// const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']

//Start loop from 1st Index
// for (let index = 0; index <= days.length - 1; index++) {
//     console.log(days[index]);
// }

//Start from end of Array Index
// for (let index = days.length - 1; index >= 0; index--) {
//     console.log(days[index]);
// }

//const myTodos = []

// myTodos.push('Buy Bread')
// myTodos.push('Record Videos for Youtube')
// myTodos.push('Go to Gym')

// myTodos.forEach(function (todo, index) {
//     console.log(`Your task no. ${index} is : ${todo}`);

// })

// myTodos.unshift('Read Ad Hoc Testing')
// myTodos.unshift('Read Respo Testing')
// myTodos.unshift('Read Ad Hoc Testing')

// for (let index = 0; index < myTodos.length; index++) {
//     const element = myTodos[index];
//     console.log(element);

// }


//const input = windows.prompt("What's your name ?");
const input = window.prompt("What's your Marks?");

if (input >= 90) {
    alert('You got Grade A')
}
else if (input >= 80) {
    alert('You got Grade B')
}
else if (input >= 70) {
    alert('You got Grade C')
}
else if (input >= 60) {
    alert('You got Grade D')
}
else if (input >= 50) {
    alert('You got Grade E')
}
else if (input < 50) {
    alert('You got Grade F')
}
else {
    alert('Your Input is Invalid')
}

