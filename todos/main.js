import * as t from "./todos.js";
import * as ls from "./ls.js";
import * as util from "./utilities.js";

//displayWhich helps keep track of which set of todo objects should be currently displayed
let displayWhich = "all";
let todos = [];
// body.addEventListener("load", ls.onLoad, false)
util.addListener(window, "DOMContentLoaded", ls.onLoad);
// document.getElementById("all").addEventListener("click", (object) => util.displayButtonClick(object), false);
// document.getElementById("active").addEventListener("click", (object) => util.displayButtonClick(object), false);
// document.getElementById("completed").addEventListener("click", (object) => util.displayButtonClick(object), false);
util.addListener(document.getElementById("all"), "click", util.displayButtonClick, true);
util.addListener(document.getElementById("active"), "click", util.displayButtonClick, true);
util.addListener(document.getElementById("completed"), "click", util.displayButtonClick, true);
util.addListener(document.getElementById("addTodo"), "click", util.addTodoTask);
// util.addListener(document.getElementById("todoContent"), "", util.addTodoTask);
document.getElementById("todoContent").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        util.addTodoTask();
        event.preventDefault();
    }
});
console.log("in main have event listeners")




export function getTodosList(){
    return todos;
}
export function setTodosList(tasks){
    todos = tasks;
    ls.saveTodos(todos);
}
export function getDisplayWhich(){
    return displayWhich;
}
export function setDisplayWhich(which){
    //only three possible values "all", "active", or "completed"
    displayWhich = which;
}

