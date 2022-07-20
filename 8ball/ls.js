import * as main from "./main.js";
import * as viewQ from "./viewQuestions.js";

export function onLoad() {
    // localStorage.clear();
    console.log(localStorage);
    if (localStorage.getItem("username")) {
        console.log('loggedin');
        // let key = getLocalStorageKey(localStorage.getItem("username"), localStorage.getItem("password"));
        // let userData = localStorage.getItem(key);
        // console.log(userData);
        // main.setUser(JSON.parse(userData));
        getUserData(localStorage.getItem("username"), localStorage.getItem("password"));
        viewQ.updateQuestionContainer();
        document.getElementById("login").innerHTML = "Log Out";
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
    console.log("getLocalStorageKey newKey: " + newKey);
    return newKey;
}

export function removeLoginData(){
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    main.setUser(null);
    document.getElementById("login").innerHTML = "Log In";
}