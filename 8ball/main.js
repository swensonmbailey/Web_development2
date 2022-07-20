
import * as util from "./utilities.js";
import * as ls from "./ls.js";



//will help know what popup window is to be displayed
//if isLogin is true then it's the login popup, if false then it's createAcc
let isLogin = true;

//this is the user's account
//user will be null until
let user = null;

//sets up event listeners
document.body.addEventListener("load", ls.onLoad(), false);
util.makeListeners();

export function getLogin() {
    return isLogin;
}
export function setLogin() {

    if (isLogin === true) {
        isLogin = false;
    } else if (isLogin === false) {
        isLogin = true;
    }
}
export function setUser(data){
    user = data;
    console.log(user);
}
export function getUser(){
    console.log();
    return user;
}
export function setUserQuestions(questionsList){
    user.questions = questionsList;
}