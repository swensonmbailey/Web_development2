
export default class User{
    constructor(user, pass, q = []){
        this.username = user;
        this.password = pass;
        this.questions = q;
    }

    // getQuestions(){
    //     return this.questions;
    // }

    // addQ(q){
    //     this.question.push(q);
    // }

}