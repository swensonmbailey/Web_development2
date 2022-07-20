import * as main from "./main.js";
import User, * as u from "./user.js";
import * as ls from "./ls.js";
import * as popup from "./popup.js";
import * as viewQ from "./viewQuestions.js";
import * as util from "./utilities.js";

export function validation() {
    console.log(main.getLogin());
    if (main.getLogin) {
        validateLogIn();
        console.log("validate log in");
    }else{
        validateCreateAcc();
        console.log("validate create acc");
    }
    // if(main.getLogin === false){
    //     validateCreateAcc();
    //     console.log("validate create acc");
    // }
}

export function validateLogIn() {
    console.log("in validateLogin");
    if (userAndPass()) {
        console.log("pass and user good now check login info");
        let username = document.getElementById("username").value;
        let pass = document.getElementById("password").value;
        let isGood = ls.getUserData(username, pass);
        console.log(isGood);
        if(isGood === false){
            console.log("login info not good")
            let button = document.getElementById('loginButton');
            displayMessage(button, "Login info not valid");
            
        }else{
            console.log("user is logged in");
            popup.exitPopup();
            document.getElementById("login").innerHTML = "Log Out";
            viewQ.updateQuestionContainer();
            util.resetBall();
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
        popup.exitPopup();
        document.getElementById("login").innerHTML = "Log Out";
        viewQ.updateQuestionContainer();
        util.resetBall();
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
