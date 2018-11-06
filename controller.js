"use strict"; 
function TodoController() {
    const vm = this; 
    
    vm.list = [
        { task: "dishes", completed: true},
        { task: "feed dog", completed: false},
        { task: "laundry", completed: true},
        { task: "cook dinner", completed: false}, 
    ];
    console.log(vm.list); 

    vm.addTask = (newItem) => {
        vm.list.push({task: newItem, completed: false});
        // console.log(newItem);
    };
    vm.removeTask = (index) => {
        vm.list.splice(index, 1); 
    };
    vm.completeTask = (chore) => {
        console.log(chore);
        chore.completed = !chore.completed; 
    };
    
}



angular
// Defining a controller
    .module("todoApp") // getter syntax, use for retrieving pieces of info
    .controller("TodoController", TodoController); 

