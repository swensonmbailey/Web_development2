import * as util from "./utilities.js";
import * as main from "./main.js";

//class used to make todo objects that will appear in the list
export default class Todo {
    constructor(id, content){
        this.id = id;
        this.content = content;
        this.completed = false;
    }

    set setCompleted(value){
        this.completed = value;
    }
    get getCompleted(){
        return this.completed;
    }
}

//updateList will update the #todoContainer elements and fill with with the todo list objects.
export function updateListContainer(taskList){
    
    let todoContainer = document.getElementById("todoContainer");
    todoContainer.innerHTML = "";
    let listLength = taskList.length;
    if(listLength){
        
        for(let i = 0; i < listLength; i++){
            todoContainer.appendChild(createTodoDiv(taskList[i]));
            
        }
    }else{
       
        //if empty show message
        todoContainer.innerHTML = "<div>Add a todo item to start your list.</div>";
    }

}

//create a div that holds the info of a todo object
//called in todos.js
function createTodoDiv(todoObject){
    
    //creates the div
    let item = document.createElement("div");
   
    item.appendChild(createCheckbox(todoObject));
    item.appendChild(createP(todoObject));
    item.appendChild(createX(todoObject));

    if(todoObject.completed === true){
        util.toggleclass(item, "completed"); //applies the correct css style to this element
    }
    //adds the .todoTask class to the div
    util.toggleclass(item, "todoTask");
    //sets the unique id of the task div in order to id the task for later manipulation 
    item.id = todoObject.id;


   
    return item;          
}

function createCheckbox(todoObject){
    //creates the checkbox and makes sure it is checked if the todo object has been completed
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todoObject.completed;
    util.toggleclass(checkbox, "checkbox"); //applies the correct css style to this element
    util.addListener(checkbox, 'change', updateCompleted, true); //adds an eventlistner to the checkbox
    util.addListener(checkbox, "mouseover", logCompleted, true);

    return checkbox;
}

function createP(todoObject){
    //creates p element for the content
    let p = document.createElement('p');
    p.innerHTML = todoObject.content;
    util.toggleclass(p, "taskContent"); //applies the correct css style to this element
    return p;
}

function createX(todoObject){
    //creates X span for task removal 
    let x = document.createElement('span');
    x.innerHTML = "X";
    util.toggleclass(x, "deleteTask"); //applies the correct css style to this element
    util.addListener(x, 'click', util.removeTask, true); //adds an eventlistner to the X span;
    return x;
}

export function logCompleted(element){
    let list = main.getTodosList();
    let parent = element.parentElement;
    let parentId = util.findTaskIndex(parent.id, list);
   
}





//updates the completed variable in a todo object
export function updateCompleted(task){


    //get the todoslist
    let list = main.getTodosList();

    //find out task's checkbox was checked - get the id of the checkbox's parent element
    let parent = task.parentElement;
    let parentId = util.findTaskIndex(parent.id, list);
    
    list[parentId].completed = true;
    

    util.toggleclass(parent, "completed");
    main.setTodosList(list);
    util.displayCurrent();
}

export function makeTaskId(){
    const date = new Date();
    let id = "";
    id += date.getMonth();
    id += date.getDate();
    id += date.getHours();
    id += date.getMinutes();
    id += date.getSeconds();
    id += date.getMilliseconds();
    
    return id;
}