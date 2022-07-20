import * as main from "./main.js";
import * as viewQ from "./viewQuestions.js";

export function onLoad() {
    // localStorage.clear();
    if (localStorage.getItem("username")) {
        console.log('loggedin');
        // let key = getLocalStorageKey(localStorage.getItem("username"), localStorage.getItem("password"));
        // let userData = localStorage.getItem(key);
        // console.log(userData);
        // main.setUser(JSON.parse(userData));
        getUserData(localStorage.getItem("username"), localStorage.getItem("password"));
        viewQ.updateQuestionContainer();
    } else {
        console.log("not logged in")
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
        console.log(userData);
        main.setUser(JSON.parse(userData));
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
    return JSON.stringify({ user, pass });
}