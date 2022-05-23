import * as todos from "./todos.js";
//adds eventlistener to an element
//called in todos.js
export function addListener(object, type, callBack){
    object.addEventListener(type, (object) => callBack(object), false);
}

