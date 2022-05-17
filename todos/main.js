class Todo {
    constructor(id, content, completed=false){
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
}

let todos;

function onLoad(){
    if (localStorage.getItem("todos")){
        todos = JSON.parse(localStorage.getItem("todos"));
    }else{
        todos = [];
    }

}

function updateList(){
    let todoContainer = document.getElementById("todoContainer");

    for(let i = 0; i > todos.length; i++){
        todoContainer.
    }
}