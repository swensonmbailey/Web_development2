import * as main from './main.js';

export function loginClick(){
    console.log("function");
    document.getElementById("loginContents").style.display = "flex";
    document.getElementById("pageContents").style.display = "none";
    if(main.getLogin === false){
        toggleCreateAcc();
    }
    
}
export function toggleCreateAcc(){
    main.setLogin();
    console.log(main.getLogin());
    
    if(main.isLogin){
        document.getElementById("createAccDiv").style.display = "none";
        document.getElementById("loginH1").innerHTML = "8-Ball Login";
        document.getElementById("questionStart").innerHTML = "Don't have";
        document.getElementById("createAcc").innerHTML = "Create one";
    }else{
        console.log(main.getLogin());
        document.getElementById("createAccDiv").style.display = "block";
        document.getElementById("loginH1").innerHTML = "8-Ball Create Account";
        document.getElementById("questionStart").innerHTML = "Have";
        document.getElementById("createAcc").innerHTML = "Sign in";
    }
}
export function exitPopup(){
    document.getElementById("loginContents").style.display = "none";
    document.getElementById("pageContents").style.display = "flex";
}