

const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Womans's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
]
let score = 0;
for(const [question, answer] of quiz){
    const response = prompt(question);
    response === answer ? (alert("Correct!"), score++) : (alert(`Wrong! The correct answer was ${answer}`));
}
alert(`Your score is ${score}`);