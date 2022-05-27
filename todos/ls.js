import * as main from "./main.js";
import * as util from "./utilities.js";

export function onLoad(){
    
    let list;
    if (localStorage.getItem("todos")){
        
        list =  JSON.parse(localStorage.getItem("todos"));
    }else{
        
        list = [];
    }
    main.setTodosList(list);
    util.displayCurrent();
    
}

export function saveTodos(todoslist){
    localStorage.setItem("todos", JSON.stringify(todoslist));
  
}