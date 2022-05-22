function onLoad(){
    if (localStorage.getItem("todos")){
        todos = JSON.parse(localStorage.getItem("todos"));
    }else{
        todos = [];
    }

}