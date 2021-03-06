import Todo, * as t from "./todos.js";
import { getTodosList, setTodosList, getDisplayWhich, setDisplayWhich } from "./main.js";



//adds eventlistener to an element
//called in todos.js
export function addListener(object, type, callBack, passObject = false) {
    
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
   

    let completed = showCompleted()
    let active = showActive()

    displayListCount({completed, active});

    return completed.concat(active);
}

export function showActive() {
 
    let list = getTodosList();
    let active = list.filter(function (a) {
        return a.completed === false;
    });
 
    displayListCount({active});
    return active;
}

export function showCompleted() {
   
    let list = getTodosList();
    let completed = list.filter(function (a) {
        return a.completed === true;
    });
   
    displayListCount({completed});
    return completed;
}

//adds a new todo object to the todos array call update
export function addTodoTask() {
   
    let todos = getTodosList();
    let content = document.getElementById("todoContent").value;
    
    if (content.length) {
        //create the object
        
        const todo = new Todo(t.makeTaskId(), content);

        todos.push(todo);
        setTodosList(todos);
       
        displayCurrent();
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
    
    displayCurrent();
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


//makes the list count appear in the #listCount element 
export function displayListCount(lists){
    let listCount = document.getElementById("listCount");
    listCount.innerHTML = "";
    if(lists.completed){
        listCount.innerHTML += `Completed: ${lists.completed.length} `;
    }
    if(lists.active){
        listCount.innerHTML += `Active: ${lists.active.length}`;
    }
}