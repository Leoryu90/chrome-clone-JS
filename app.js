const loginForm = document.querySelector(".login-form");


function onLoginSubmit() {
    console.log(loginInput.value)
}

loginForm.addEventListener("submit", onLoginSubmit);