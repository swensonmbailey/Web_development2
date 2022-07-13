import * as popup from "./popup.js";
import * as util from "./utilities.js";
import * as ls from "./ls.js";
import User, * as u from "./user.js";
/*
variables
*/

//will help know what popup window is to be displayed
//if isLogin is true then it's the login popup, if false then it's createAcc
let isLogin = true;

//this is the user's account
//user will be null until
let user = null;

//sets up event listeners
document.body.addEventListener("load", ls.onLoad(), false);
util.makeListeners();
// document.getElementById("loginButton").addEventListener('click', (e) =>{
//     e.preventDefault();
//     util.login();
// }, false);

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