import * as main from "./main.js";
import * as ls from "./ls.js";

export function updateQuestionContainer() {
    
    if (main.getUser()) {
        let questionList = main.getUser().questions;
        let questionContainer = document.getElementById("quesitonContainer");
        questionContainer.innerHTML = "";
        let listLength = questionList.length;
        if (listLength) {

            for (let i = 0; i < listLength; i++) {
                questionContainer.appendChild(createQuestionDiv(questionList[i]));

            }
        } else {

            //if empty show message
            questionContainer.innerHTML = "<div>You have yet to ask a question</div>";
        }
    }else{
        document.getElementById("quesitonContainer").innerHTML = "";
    }


}


function createQuestionDiv(questionObject) {

    //creates the div
    let question = document.createElement("div");

    question.appendChild(createQuestionP(questionObject));
    question.appendChild(createAnswerP(questionObject));
    question.appendChild(createX(questionObject));


    //will be used to remove the question later on if the user wants 
    question.id = questionObject.id;

    question.classList.toggle("questionDiv");

    return question;
}


function createQuestionP(questionObject) {
    //creates p element for the question
    let questionP = document.createElement('p');
    questionP.innerHTML = "Q: " + questionObject.question + "?";
    questionP.classList.toggle("questionP");
    return questionP;
}

function createAnswerP(questionObject) {
    let answerP = document.createElement('p');
    answerP.innerHTML = "A: " + questionObject.answer + ".";
    answerP.classList.toggle("answerP");
    return answerP;
}

function createX(questionObject) {
    //creates X span for question removal 
    let x = document.createElement('span');
    x.innerHTML = "X";
    x.classList.toggle("x");
    x.addEventListener('click', (e) => {
        removeTask(e.target);
    })
    return x;
}

function removeTask(question) {
    //get parent element find out it's id and use it to find the index of the question object in the user's questions array
    let parent = question.parentElement;
    let questions = main.getUser().questions;
    let index = findQuestionIndex(parent.id, questions);

    //remove the question
    questions.splice(index, 1);
    main.setUserQuestions(questions);

    //update localstorage
    ls.updateUserStorage(main.getUser());

    updateQuestionContainer();
}

function findQuestionIndex(Id, list) {

    for (let i = 0; i < list.length; i++) {
        if (list[i].id === Id) {
            return i;
        }
    }
    return null;
}

export function toggleQuestionContainer() {
    let value = document.getElementById("quesitonContainer").style.display;
    if (value === "block" || value === "Block") {
        document.getElementById("quesitonContainer").style.display = "none";
    } else {
        document.getElementById("quesitonContainer").style.display = "block";
    }
}

