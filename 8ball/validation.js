import * as main from "./main.js";
import User, * as u from "./user.js";
import * as ls from "./ls.js";

export function validation() {
    if (main.getLogin) {
        validateLogIn();
    } else {
        validateCreateAcc();
    }
}

function validateLogIn() {
    console.log("in validateLogin")
    if (userAndPass()) {

        let username = document.getElementById("username");
        let pass = document.getElementById("password");
        if(ls.getUserData(username, pass)){
            console.log("login info not good")
            let button = document.getElementById('loginButton');
            displayMessage(button, "Login info not valid");
        }
    }
}

function validateCreateAcc() {
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    console.log("in validate log in");
    let newPass = document.getElementById("password");
    let confirm = document.getElementById("confirm");
    console.log(pattern.test(newPass));

    //sets up conditionals
    let goodUserAndPass = userAndPass();
    let goodConfirm = newPass.value === confirm.value;


    if (goodUserAndPass && goodConfirm) {
        //if here create account info is valid so create a new user with that info
        let user = new User(username.value, newPass.value);
        console.log(user);
        main.setUser(user);
        ls.updateUserStorage(user);
    } else {

        if (goodConfirm === false) {
            displayMessage(confirm, "Required: must match the password above");
        }
    }
}

function userAndPass() {
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    console.log("in userAndPass");
    let username = document.getElementById("username");
    let newPass = document.getElementById("password");

    //sets up conditionals
    let goodUser = username.value.length > 0;
    let goodNewPass = pattern.test(newPass.value) && newPass.length > 0;

    if (goodUser && goodNewPass) {
        return true;
    } else {

        if (goodUser === false) {
            displayMessage(username, "Required");
        }
        if (goodNewPass === false) {
            displayMessage(newPass, "Required: must contain uppercase lowercase");
        }
        return false;
    }
}

function displayMessage(element, message) {
    let parentEl = element.parentElement;
    let advise = parentEl.querySelector('span')
    advise.innerHTML = message;
}
