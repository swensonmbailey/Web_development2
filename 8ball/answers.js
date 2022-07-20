import * as main from "./main.js";
import * as ls from "./ls.js";
import * as util from "./utilities.js"
import Question from "./question.js";
import * as viewQ from "./viewQuestions.js";

export function getAnswer(question){
    let ans;
    let params = encodeURIComponent(question);
    let url = "https://8ball.delegator.com/magic/JSON/" + params;
    fetch(url)
    .then(response => response.json())
    .then(magic => {
        util.messageInBall(magic.magic.answer);
        
        
        //create 
        let user = main.getUser();
        
        let q = new Question(question, magic.magic.answer);
        user.questions.push(q);
        main.setUser(user);
        ls.updateUserStorage(user);
        


        //update the viewQuestions container
        viewQ.updateQuestionContainer();
        
    })
    .catch(error => console.log(error));
    
}