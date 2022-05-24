import Todo, * as t from "./todos.js";
import { getTodosList, setTodosList } from "./main.js";


const date = new Date();

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
    t.updateListContainer(getTodosList());
}

export function showActive() {
    console.log("inside showActive()");
    let list = getTodosList();
    t.updateListContainer(list.filter(function (a) {
        return a.completed === false;
    }));
}

export function showCompleted() {
    console.log("inside showCompleted()");
    let list = getTodosList();
    t.updateListContainer(list.filter(function (a) {
        return a.completed === true;
    }));
}

//adds a new todo object to the todos array call update
export function addTodoTask() {
    console.log("inside addTodoTask()");
    let todos = getTodosList();
    let content = document.getElementById("todoContent").value;
    if (content.length) {
        //create the object
        console.log(date.getTime());
        const todo = new Todo(date.getTime().toString(), content);

        todos.push(todo);
        setTodosList(todos);
        t.updateListContainer(todos);
    }

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