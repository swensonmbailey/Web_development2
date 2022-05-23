import * as t from "./todos.js";
import * as ls from "./ls.js";
import * as util from "./utilities.js";


let todos;
util.addListener(document.body, "load", ls.onLoad);
util.addListener(document.getElementById("showAll"), "click", util.showAll);
util.addListener(document.getElementById("showActive"), "click", util.showActive);
util.addListener(document.getElementById("showCompleted"), "click", util.showCompleted);
util.addListener(document.getElementById("addTodo"), "click", util.addTodoTask);





export function getTodosList(){
    return todos;
}
export function setTodosList(tasks){
    todos = tasks;
    ls.saveTodos(todos);
}