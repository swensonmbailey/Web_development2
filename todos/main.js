import * as t from "./todos.js";
import * as ls from "./ls.js";
import * as util from "./utilities.js";


let todos = [];
// body.addEventListener("load", ls.onLoad, false)
util.addListener(window, "DOMContentLoaded", ls.onLoad);
util.addListener(document.getElementById("showAll"), "click", util.showAll);
util.addListener(document.getElementById("showActive"), "click", util.showActive);
util.addListener(document.getElementById("showCompleted"), "click", util.showCompleted);
util.addListener(document.getElementById("addTodo"), "click", util.addTodoTask);
console.log("in main have event listeners")




export function getTodosList(){
    return todos;
}
export function setTodosList(tasks){
    todos = tasks;
    ls.saveTodos(todos);
}