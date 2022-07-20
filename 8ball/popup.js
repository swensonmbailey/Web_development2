import * as main from './main.js';
import { validateCreateAcc, validateLogIn, displayMessage} from './validation.js';

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
    
    if(main.getLogin()){
        // document.getElementById("createAccDiv").style.display = "none";
        // document.getElementById("loginH1").innerHTML = "8-Ball Login";
        // document.getElementById("questionStart").innerHTML = "Don't have";
        // document.getElementById("createAcc").innerHTML = "Create one";
        // document.getElementById("loginButton").innerHTML = "Login";
        // document.getElementById("loginButton").addEventListener('click', (e) =>{
        //     e.preventDefault();
        //     validateLogIn();
        // }, false);
        // clearSpan();
        // clearInputs();
        showLogin();
    }else{
        // console.log(main.getLogin());
        // document.getElementById("createAccDiv").style.display = "block";
        // document.getElementById("loginH1").innerHTML = "8-Ball Create Account";
        // document.getElementById("questionStart").innerHTML = "Have";
        // document.getElementById("createAcc").innerHTML = "Sign in";
        // document.getElementById("loginButton").innerHTML = "Create Account";
        // document.getElementById("loginButton").addEventListener('click', (e) =>{
        //     e.preventDefault();
        //     validateCreateAcc();
        // }, false);
        // clearSpan();
        // clearInputs();
        showCreateAcc();
    }
}

function showLogin(){
    document.getElementById("createAccDiv").style.display = "none";
    document.getElementById("loginH1").innerHTML = "8-Ball Login";
    document.getElementById("questionStart").innerHTML = "Don't have";
    document.getElementById("createAcc").innerHTML = "Create one";
    document.getElementById("loginButton").innerHTML = "Login";
    document.getElementById("loginButton").addEventListener('click', (e) =>{
        e.preventDefault();
        validateLogIn();
    }, false);
    clearSpan();
    clearInputs();
}

function showCreateAcc(){
    console.log(main.getLogin());
    document.getElementById("createAccDiv").style.display = "block";
    document.getElementById("loginH1").innerHTML = "8-Ball Create Account";
    document.getElementById("questionStart").innerHTML = "Have";
    document.getElementById("createAcc").innerHTML = "Sign in";
    document.getElementById("loginButton").innerHTML = "Create Account";
    document.getElementById("loginButton").addEventListener('click', (e) =>{
        e.preventDefault();
        validateCreateAcc();
    }, false);
    clearSpan();
    clearInputs();
}


export function exitPopup(){
    clearInputs();
    clearSpan();
    document.getElementById("loginContents").style.display = "none";
    document.getElementById("pageContents").style.display = "flex";
    
}

function clearSpan(){
    displayMessage(document.getElementById("username"), "");
    displayMessage(document.getElementById("password"), "");
    displayMessage(document.getElementById("confirm"), "");
    displayMessage(document.getElementById("loginButton"), "");
    
}

function clearInputs(){
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm").value = "";
}