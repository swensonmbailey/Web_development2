
export function getAnswer(question){
    let params = encodeURIComponent(question);
    let url = "https://8ball.delegator.com/magic/JSON/" + params;
    fetch(url)
    .then(response => response.json())
    .then(magic => {
        console.log(magic);
        let div = document.getElementById("answer");
        div.innerHTML = magic.magic.answer;
        div.style.fontSize = "10px";
    })
    .catch(error => console.log(error));
}