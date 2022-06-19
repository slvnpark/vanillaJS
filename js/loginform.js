// 변수
const loginForm = document.querySelector("#loginForm"),
loginInput = document.querySelector("#loginForm input"),
greeting = document.querySelector("#greeting"),
textLogin = document.querySelector(".text_login");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const saveUsername = localStorage.getItem(USERNAME_KEY);


// 함수
function paintGreetings (username) {
    greeting.innerText = `${username}, 만나서 반갑습니다!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    textLogin.innerText = "";
    loginForm.innerText = "";
}

function submitInput (event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}


if (saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", submitInput);
} else {
    paintGreetings(saveUsername);
}


