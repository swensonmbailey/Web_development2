import * as main from "./main.js";
import User, * as u from "./user.js";
import * as ls from "./ls.js";

export function validation() {
    console.log(main.getLogin());
    if (main.getLogin === true) {
        validateLogIn();
    }
    if(main.getLogin === false){
        validateCreateAcc();
    }
}

export function validateLogIn() {
    console.log("in validateLogin")
    if (userAndPass()) {

        let username = document.getElementById("username");
        let pass = document.getElementById("password");
        if(ls.getUserData(username, pass) === false){
            console.log("login info not good")
            let button = document.getElementById('loginButton');
            displayMessage(button, "Login info not valid");
        }
    }
}

export function validateCreateAcc() {
    // let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,})/;
    console.log("in validateCreateAcc");
    let newPass = document.getElementById("password");
    let confirm = document.getElementById("confirm");
    // console.log(pattern.test(newPass));

    //sets up conditionals
    let goodUserAndPass = userAndPass();
    let goodConfirm = newPass.value === confirm.value;

    console.log("validateCreateAcc part 2");

    if (goodUserAndPass && goodConfirm) {
        //if here create account info is valid so create a new user with that info
        let user = new User(username.value, newPass.value);
        console.log("for create acc all info good");
        main.setUser(user);
        ls.updateUserStorage(user);
    } else {

        if (goodConfirm === false) {
            console.log("confirm bad");
            displayMessage(confirm, "Required: must match the password above");
        }
    }
}

function userAndPass() {
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,})/;
    console.log("in userAndPass");
    let username = document.getElementById("username");
    let newPass = document.getElementById("password");

    //sets up conditionals
    let goodUser = username.value.length > 0;
    let goodNewPass = pattern.test(newPass.value);

    if (goodUser && goodNewPass) {
        console.log("good user and pass");
        return true;
    } else {
        console.log("user or pass not good");
        if (goodUser === false) {
            displayMessage(username, "Required");
        }
        if (goodNewPass === false) {
            displayMessage(newPass, "Required: upper & lowercase, number, 8+ length");
        }
        return false;
    }
}

export function displayMessage(element, message) {
    let parentEl = element.parentElement;
    let advise = parentEl.querySelector('span')
    advise.innerHTML = message;
}
