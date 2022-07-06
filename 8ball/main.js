import * as popup from "./popup.js";
import * as util from "./utilities.js";
import * as ls from "./ls.js";

/*
variables
*/

//will help know what popup window is to be displayed
//if isLogin is true then it's the login popup, if false then it's createAcc
let isLogin = true;

//helped used to tell of the user is logged in
let isLoggedin = false;

let user = null;

//sets up event listeners
document.body.addEventListener("load", ls.onLoad(), false);
util.makeListeners();
document.getElementById("loginButton").addEventListener('click', (e) =>{
    e.preventDefault();
    util.login();
}, false);

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
}
export function getUser(){
    return user;
}