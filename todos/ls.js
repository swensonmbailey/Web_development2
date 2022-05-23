import * as main from "./main.js";
import * as t from "./todos.js";

export function onLoad(){
    let list;
    if (localStorage.getItem("todos")){
        list =  JSON.parse(localStorage.getItem("todos"));
    }else{
        list = [];
    }
    main.setTodosList(list);
    t.updateListContainer(todos);
}

export function saveTodos(todoslist){
    localStorage.setItem("todos", JSON.stringify(main.getTodosList()));
}