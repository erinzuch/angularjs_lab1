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

    
}



angular
    .module("todoApp")
    .controller("TodoController", TodoController); 

