import * as main from "./main.js";
import * as viewQ from "./viewQuestions.js";

export function onLoad() {
    if (localStorage.getItem("username")) {
        
        
        getUserData(localStorage.getItem("username"), localStorage.getItem("password"));
        viewQ.updateQuestionContainer();
        document.getElementById("login").innerHTML = "Log Out";
    }
}

export function updateUserStorage(user) {
    setLoginData(user.username, user.password);
    let key = getLocalStorageKey(user.username, user.password);
    localStorage.setItem(key, JSON.stringify(user));
}

export function getUserData(user, pass) {
    let key = getLocalStorageKey(user, pass);
    let userData = localStorage.getItem(key);
    if(userData){
        
        main.setUser(JSON.parse(userData));
        setLoginData(user, pass);
        return true;
    }else{
        return false;
    }
    
    
    
}

export function setLoginData(user, pass) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
}

function getLocalStorageKey(user, pass) {
    let newKey = user + pass;
  
    return newKey;
}

export function removeLoginData(){
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    main.setUser(null);
    document.getElementById("login").innerHTML = "Log In";
}