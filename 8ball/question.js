
export default class Question{
    constructor(q, a){
        this.question = q;
        this.answer = a;
        this.id = makeQuestionId();
    }
}

function makeQuestionId(){
    const date = new Date();
    let id = "";
    id += date.getMonth();
    id += date.getDate();
    id += date.getHours();
    id += date.getMinutes();
    id += date.getSeconds();
    id += date.getMilliseconds();
    
    return id;
}