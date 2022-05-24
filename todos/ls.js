import * as main from "./main.js";
import * as t from "./todos.js";

export function onLoad(){
    console.log("local storage checked");
    let list;
    if (localStorage.getItem("todos")){
        console.log("todos exists in local storage")
        list =  JSON.parse(localStorage.getItem("todos"));
    }else{
        console.log("todos doesn't exists in local storage")
        list = [];
    }
    main.setTodosList(list);
    t.updateListContainer(list);
    
}

export function saveTodos(todoslist){
    localStorage.setItem("todos", JSON.stringify(todoslist));
    // localStorage.clear();
    console.log('end of saveTodos()');
}