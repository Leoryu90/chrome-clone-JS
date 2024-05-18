const loginForm = document.querySelector(".login-form");
const loginput = document.querySelector(".login-form input");



function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginput.value);
}


loginForm.addEventListener("submit", onLoginSubmit);
