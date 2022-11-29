let myTodos = {
    day: 'Sunday',
    tasks: 0,
    taskDone: 0,
}

let addTasks = function (todo, task = 0) {
    todo.tasks = todo.tasks + task
}

let taskDone = function (todo, task = 0) {
    todo.taskDone = todo.taskDone - task
}

let resetDay = function (todo) {
    todo.tasks = 0
    todo.taskDone = 0
}

let getSummaryofDay = function (todo) {
    let tasksleft = todo.tasks + todo.taskDone
    return `You have ${tasksleft} tasks today! `
}

addTasks(myTodos, 4)
addTasks(myTodos, 5)

taskDone(myTodos, 5)
console.log(myTodos)
console.log(getSummaryofDay(myTodos));