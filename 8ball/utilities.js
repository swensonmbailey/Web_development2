import * as popup from "./popup.js";
import * as main from "./main.js";
import * as ls from './ls.js';
import { getAnswer } from "./answers.js";
import { validation, validateCreateAcc, validateLogIn } from "./validation.js";
import * as viewQ from "./viewQuestions.js";

//called when ask button is pushed. 
//If question element has a length then takes that question as call the function with the fetch what will retrieve the answer from the api
//then when the answer is retrieved a question object will be created and added to the current user's questions array.
export function addQuestion() {

    let question = getQuestion();

    if (question.length) {
        //create the object
        getAnswer(question);

    }else{
        messageInBall("Must type a question");
    }

    document.getElementById("question").value = ""; //reset the input box
}

export function getQuestion() {
    return document.getElementById("question").value;
}


//function that holds all event listeners needed onload
export function makeListeners() {
    document.getElementById('login').addEventListener('click', (e) => {
        console.log("event");
        if (main.getUser()) {
            ls.removeLoginData();
            viewQ.updateQuestionContainer();
            resetBall();
            console.log("logged out");
        } else {
            popup.loginClick();
        }

    }, false);

    document.getElementById('back').addEventListener('click', (e) => {
        animateBall(3);
        popup.exitPopup();
        resetBall();
    }, false);

    document.getElementById('createAcc').addEventListener('click', (e) => {
        console.log('createAcc click');
        popup.toggleCreateAcc();
    }, false);

    document.getElementById('ask').addEventListener('click', (e) => {
        e.preventDefault();
        let r = document.documentElement;
        animateBall();
        if (main.getUser()) {
            console.log('asking question');
            addQuestion();
        } else {
            messageInBall("Log in to ask a question");
        }


    }, false);

    document.getElementById("loginButton").addEventListener('click', (e) => {
        e.preventDefault();
        validation();
    }, false);

    document.getElementById("question").addEventListener("focus", () => {
        resetBall();
    })

    document.getElementById("changeView").addEventListener('click', (e) => {
        viewQ.toggleQuestionContainer();
    }, false);
}

function animateBall(set = 0) {
    let r = document.documentElement;
    let rs = getComputedStyle(r);

    if (set === 0) {
        let animationNum = parseInt(rs.getPropertyValue("--repetition"));
        r.style.setProperty('--repetition', (animationNum + 3));
        console.log(rs.getPropertyValue("--repetition"));
    } else {
        r.style.setProperty('--repetition', set);
    }


}


export function resetBall() {
    let div = document.getElementById("answer");
    div.innerHTML = "8";
    div.style.fontSize = "5rem";
}
export function messageInBall(message) {
    let div = document.getElementById("answer");
    div.innerHTML = message;
    div.style.fontSize = "15px";
    div.style.textAlign = "center";
    div.style.overflow = "hidden";
}