import * as main from "./main.js";
import User, * as u from "./user.js";
import * as ls from "./ls.js";
import * as popup from "./popup.js";
import * as viewQ from "./viewQuestions.js";
import * as util from "./utilities.js";

export function validation() {
    
    if (main.getLogin) {
        validateLogIn();
       
    }else{
        validateCreateAcc();
        
    }
}

export function validateLogIn() {
    if (userAndPass()) {
      
        let username = document.getElementById("username").value;
        let pass = document.getElementById("password").value;
        let isGood = ls.getUserData(username, pass);
    
        if(isGood === false){
            
            let button = document.getElementById('loginButton');
            displayMessage(button, "Login info not valid");
            
        }else{
    
            popup.exitPopup();
            document.getElementById("login").innerHTML = "Log Out";
            viewQ.updateQuestionContainer();
            util.resetBall();
        }
    }
}

export function validateCreateAcc() {


    let newPass = document.getElementById("password");
    let confirm = document.getElementById("confirm");
    

    //sets up conditionals
    let goodUserAndPass = userAndPass();
    let goodConfirm = newPass.value === confirm.value;

   

    if (goodUserAndPass && goodConfirm) {
        //if here create account info is valid so create a new user with that info
        let user = new User(username.value, newPass.value);
        
        main.setUser(user);
        ls.updateUserStorage(user);
        popup.exitPopup();
        document.getElementById("login").innerHTML = "Log Out";
        viewQ.updateQuestionContainer();
        util.resetBall();
    } else {

        if (goodConfirm === false) {
           
            displayMessage(confirm, "Required: must match the password above");
        }
    }
}

function userAndPass() {
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,})/;
    
    let username = document.getElementById("username");
    let newPass = document.getElementById("password");

    //sets up conditionals
    let goodUser = username.value.length > 0;
    let goodNewPass = pattern.test(newPass.value);

    if (goodUser && goodNewPass) {
        
        return true;
    } else {
      
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
