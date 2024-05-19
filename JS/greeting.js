const loginForm = document.querySelector(".login-form");
const loginput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username";

// 펑션 안에 펑션은 안되는건가? 변수선언도?
// function addHidden(){
//     loginForm.classList.add(HIDDEN_CLASSNAME);
// }
// function removeHidden(){
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
// }
// const addHidden = loginForm.classList.add(HIDDEN_CLASSNAME);
// const removeHidden = loginForm.classList.remove(HIDDEN_CLASSNAME);

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintUsername(username)
}

function paintUsername(username) {
    greeting.innerText = `좋은하루입니다. ${username}님 보람찬 하루를 보내세요`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedname = localStorage.getItem(USERNAME_KEY);

if (savedname === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    paintUsername(savedname)
}
