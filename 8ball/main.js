// document.getElementById('ask').addEventListener('click', (e)=>{
//     e.preventDefault();
//     let r = document.querySelector(':root');
//     r.style.setProperty('--repetition', 'infinite');

// }, false);

document.getElementById('login').addEventListener('click', (e)=>{
    document.getElementById("loginContents").style.display = "flex";
    document.getElementById("pageContents").style.display = "none";

}, false);

document.getElementById('back').addEventListener('click', (e)=>{
    document.getElementById("loginContents").style.display = "none";
    document.getElementById("pageContents").style.display = "flex";

}, false);

document.getElementById('createAcc').addEventListener('click', (e)=>{
    document.getElementById("createAccDiv").style.display = "block";
    document.getElementById("loginH1").innerHTML = "8-Ball Create Account"
    document.getElementById("loginP").innerHTML = "Have an account? <br> <span id='createAcc'>Sign in</span>"
}, false);
