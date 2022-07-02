import * as popup from "./popup.js";

//will help know what popup window is to be displayed
//if isLogin is true then it's the login popup, if false then it's createAcc
export let isLogin = true;

document.getElementById('login').addEventListener('click', (e)=>{
    console.log("event");
    popup.loginClick();
}, false);

document.getElementById('back').addEventListener('click', (e)=>{
    isLogin = true;
    popup.exitPopup();

}, false);

document.getElementById('createAcc').addEventListener('click', (e)=>{
    console.log('createAcc click');  
    popup.toggleCreateAcc();
}, false);

export function getLogin() {
    return isLogin;
}
export function setLogin(){
    if(isLogin === true){
        isLogin = false;
    }else if(isLogin === false){
        isLogin = true;
    }
    // isLogin = false;
}