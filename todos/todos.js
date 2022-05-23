import * as util from "./utilities.js";
import * as main from "./main.js";

//class used to make todo objects that will appear in the list
export default class Todo {
    constructor(id, content, completed=false){
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
}

//updateList will update the #todoContainer elements and fill with with the todo list objects.
export function updateListContainer(taskList){
    let todoContainer = document.getElementById("todoContainer");
    todoContainer.innerHTML = "";
    let listLength = taskList.length;
    if(listLength){

        for(let i = 0; i > listLength; i++){
            todoContainer.innerHTML += createTodoDiv(taskList[i]);
        }
    }else{
        //if empty show message
        todoContainer.innerHTML = "Add a todo item to start your list.";
    }

}

//create a div that holds the info of a todo object
//called in todos.js
function createTodoDiv(todoObject){
    //creates the div
    let item = document.createElement("div");
    //creates the checkbox and makes sure it is checked if the todo object has been completed
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todoObject.completed;
    util.addListener(checkbox, 'change', updateCompleted, true); //adds an eventlistner to the checkbox
    //creates p element for the content
    let p = document.createElement('p');
    p.innerHTML = todoObject.content;
    //creates X span for task removal 
    let x = document.createElement('span');
    x.innerHTML = "X";
    util.addListener(x, 'click', removeTask, true); //adds an eventlistner to the X span;


    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(x);
    return item;          
}


//updates the completed variable in a todo object
export function updateCompleted(task){

}

//removes a task from the todos array
export function removeTask(task){

}

