// let myTodos = {
//     day: 'Sunday',
//     tasks: 0,
//     taskDone: 0,

//     addTasks: function () {
//         console.log(this)
//     }
// }

// let myTodostwo = {
//     day: 'Monday',
//     tasks: 12,
//     taskDone: 7,

//     addTasks: function () {
//         console.log(this)
//     }
// }

// myTodos.addTasks()
// myTodostwo.addTasks()


let myTodos = {
    day: 'Sunday',
    tasks: 0,
    taskDone: 0,

    addTasks: function (num) {
        this.tasks = this.tasks + num;
    },
    summary: function () {
        return `You have ${this.tasks} tasks Today !`
    }

}

myTodos.addTasks(6)
console.log(myTodos.summary())