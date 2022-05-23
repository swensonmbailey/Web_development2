import Todo, * as t from "./todos.js";
import { getTodosList, setTodosList } from "./main.js";


const date = new Date();

//adds eventlistener to an element
//called in todos.js
export function addListener(object, type, callBack, passObject = false){
    if(passObject){
        object.addEventListener(type, (object) => callBack(object), false);
    }else{
        object.addEventListener(type, callBack, false);
    }
    
}

export function showAll(){

}

export function showActive(){

}

export function showCompleted(){

}

//adds a new todo object to the todos array call update
export function addTodoTask(){
    let todos = getTodosList();
    let content = document.getElementById("todoContent").value;
    //create the object
    const todo = new Todo(date.toString(), content);

    todos.push(todo);
    setTodosList(todos);
    t.updateListContainer(todos);
}