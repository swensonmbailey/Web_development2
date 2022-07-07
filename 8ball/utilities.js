import * as popup from "./popup.js";
import * as main from "./main.js";
import User, * as u from "./user.js";
import * as ls from './ls.js';
import Question from "./question.js";
import { getAnswer } from "./answers.js";

//called when ask button is pushed. 
//If question element has a length then takes that question as call the function with the fetch what will retrieve the answer from the api
//then when the answer is retrieved a question object will be created and added to the current user's questions array.
export function addQuestion() {
   
    let question = document.getElementById("question").value;
    
    if (question.length) {
        //create the object
        getAnswer(question);

       
    }
    
    document.getElementById("question").value = ""; //reset the input box
}


//function that holds all event listeners needed onload
export function makeListeners(){
    document.getElementById('login').addEventListener('click', (e)=>{
        console.log("event");
        popup.loginClick();
    }, false);
    
    document.getElementById('back').addEventListener('click', (e)=>{
        
        popup.exitPopup();
    
    }, false);
    
    document.getElementById('createAcc').addEventListener('click', (e)=>{
        console.log('createAcc click');  
        popup.toggleCreateAcc();
    }, false);

    document.getElementById('ask').addEventListener('click', (e)=>{
        e.preventDefault();
        console.log('asking question');  
        addQuestion();
    }, false);
}


export function login(){
    let username = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let user = new User(username, pass);
    console.log(user);
    main.setUser(user);
    ls.updateUserStorage(user);

}