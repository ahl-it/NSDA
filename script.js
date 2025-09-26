            /* Individual task objects*/
            const task1 = { id: 1, name: "Buy groceries", completed: false };
            const task2 = { id: 2, name: "Pray Salah",completed: false };
            const task3 = { id: 3, name: "Do Dhikr",completed: true };
            const task4 = { id: 4, name: "Do homework",completed: false };
            const task5 = { id: 5, name: "watch podcasts", completed: true };

            const tasks=[task1, task2, task3, task4, task5];
            
             /* store task objects in array*/
        for ( let i=0; i<tasks.length; i++){
            let task = tasks[i];

            if (task.completed){
                console.log( `Task ${task.name} is completed!`)
            } else {
                console.log(`Task  ${ task.name } is still pending.`)
            }
        }