import * as todos from "./todos.js";
import * as ls from "./ls.js";
import * as util from "./utilities.js";


let todos;
document.body.addEventListener("load", onLoad, false);





export function getTodosList(){
    return todos;
}
export function setTodosList(tasks){
    todos = tasks;
}