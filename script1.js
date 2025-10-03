let tasks=[];
function addTask(taskName){
    const task= {
        id: tasks.length + 1,
        name: taskName,
    }
    tasks.push(task)
console.log( `The task ${taskName} is added successfully.`)
}
addTask("Buy groceries");
console.log(tasks)