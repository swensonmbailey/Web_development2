import * as main from "./main.js";
import * as todos from "./todos.js";

export function onLoad(){
    let list;
    if (localStorage.getItem("todos")){
        list =  JSON.parse(localStorage.getItem("todos"));
    }else{
        list = [];
    }
    main.setTodosList(list);
    todos.updateListContainer(todos);
}