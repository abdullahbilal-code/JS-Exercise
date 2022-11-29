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

    tasksDone: function (num) {
        this.taskDone = this.taskDone - num
    },

    summary: function () {
        tasksleft = this.tasks + this.taskDone
        return `You have ${tasksleft} tasks Today !`
    },
    resetDay: function () {
        tasks = 0
        taskDone = 0
    }


}

myTodos.addTasks(10)
myTodos.tasksDone(3)

console.log(myTodos.summary())