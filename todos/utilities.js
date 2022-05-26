import Todo, * as t from "./todos.js";
import { getTodosList, setTodosList, getDisplayWhich, setDisplayWhich } from "./main.js";



//adds eventlistener to an element
//called in todos.js
export function addListener(object, type, callBack, passObject = false) {
    console.log("inside addListener()")
    if (passObject) {
        object.addEventListener(type, (object) => callBack(object.target), false);
    } else {
        object.addEventListener(type, callBack, false);
    }

}

//toggle class of an element
//called in todos.js
export function toggleclass(element, classToggled) {
    element.classList.toggle(classToggled);
}

export function showAll() {
    console.log("inside showAll()");
    // t.updateListContainer(getTodosList());
    return showCompleted().concat(showActive());
}

export function showActive() {
    console.log("inside showActive()");
    let list = getTodosList();
    let active = list.filter(function (a) {
        return a.completed === false;
    });
    // t.updateListContainer(active);
    return active;
}

export function showCompleted() {
    console.log("inside showCompleted()");
    let list = getTodosList();
    let completed = list.filter(function (a) {
        return a.completed === true;
    });
    // t.updateListContainer(completed);
    return completed;
}

//adds a new todo object to the todos array call update
export function addTodoTask() {
    console.log("inside addTodoTask()");
    let todos = getTodosList();
    let content = document.getElementById("todoContent").value;
    
    if (content.length) {
        //create the object
        
        const todo = new Todo(t.makeTaskId(), content);

        todos.push(todo);
        setTodosList(todos);
        t.updateListContainer(todos);
    }
    
    document.getElementById("todoContent").value = ""; //reset the input box
}

//removes a task from the todos array
export function removeTask(task){
    //get parent element find out it's id and use it to find the index of the todo object in the todos array
    let parent = task.parentElement;
    let list = getTodosList();
    let index = findTaskIndex(parent.id, list);
    
    list.splice(index,1);
    setTodosList(list);
    t.updateListContainer(list);
}

//return the index of a task that can be used to later maniuplate the corrent task
export function findTaskIndex(Id, list){
    
    for(let i = 0; i < list.length; i++){
        if(list[i].id === Id){
            return i;
        }
    }
    return null;
}

//displayCurrent is used to display the correct kind of todo objects on the screen at the moment
export function displayCurrent(){
    let current = getDisplayWhich();
    
    if(current === "all"){
        t.updateListContainer(showAll());
    }
    if(current === "active"){
        t.updateListContainer(showActive());
    }
    if(current === "completed"){
        t.updateListContainer(showCompleted());
    }
}

export function displayButtonClick(element){
    setDisplayWhich(element.id);
    displayCurrent();
}