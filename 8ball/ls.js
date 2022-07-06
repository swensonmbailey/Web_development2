import * as main from "./main.js";

export function onLoad(){
    if(localStorage.getItem("username")){
        console.log('loggedin');
        let key = getLocalStorageKey(localStorage.getItem("username"), localStorage.getItem("password"));
        let userData = localStorage.getItem(key);
        main.setUser(userData);
    }else{
        console.log("not logged in")
    }
}

export function updateUserStorage(user){
    setLoginData(user.username, user.password);
    let key = getLocalStorageKey(user.username, user.password);
    localStorage.setItem(key, JSON.stringify(user));
}

export function setLoginData(user, pass){
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
}

function getLocalStorageKey(user, pass){
    return JSON.stringify({user, pass});
}