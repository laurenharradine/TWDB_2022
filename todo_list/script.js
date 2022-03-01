let ans = prompt("What would you like to do?");
const todos = ['Placeholder task', 'Eat'];

//Don't get fooled into using || here lol
while (ans !== 'quit' && ans !== 'q') {
    if (ans === 'list' || ans === 'l') {
        console.log ("Here are your current tasks:");
        /* dumb dumb...
        for(let i of todos){
            console.log(`[${}]: ${i}`);
        }*/
        for (let i = 0; i < todos.length; i++) {
            //could also use a foreach to access array
            console.log(`[${i}]: ${todos[i]}`);
        }
    }
    else if (ans === 'new' || ans === 'n') {
        const newTask = prompt("Enter your new task");
        todos.push(newTask);
        console.log(`Added task: ${newTask} to position [${todos.length - 1}]`);
    }
    else if (ans === 'delete' || ans === 'd') {
        const killTask = parseInt(prompt("Enter the position of the task you wish to remove"));
        //make sure an integer has been entered and doesn't exceed bounds of array
        if(killTask < todos.length && killTask >= 0) {
            todos.splice(killTask, 1);
            console.log(`Task [${killTask}] has been removed.`);
        }
        else {
            console.log(`Invalid task position`);
        }
    }
    ans = prompt("What would you like to do?");
}
console.log ("OK fine you are a quitter");