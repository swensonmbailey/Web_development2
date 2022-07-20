
export default class User{
    constructor(user, pass, q = []){
        this.username = user;
        this.password = pass;
        this.questions = q;
    }

}