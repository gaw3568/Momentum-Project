const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");        // login-form ID의 input 요소를 연결
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {              //하나의 인수를 받고 있는 상태
    event.preventDefault();             // preventDefault 함수를 사용함으로 인해 브라우저의 기본 동작을 막아줌. ex) 새로고침 등
    loginForm.classList.add(HIDDEN_CLASSNAME);  // form 형식이 채워지고 sumbit 되면, form요소가 사라짐
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);    // classList에서 HIDDEN_CLASSNAME을 삭제.
}

const saveUserName = localStorage.getItem(USERNAME_KEY);

if (saveUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);   
} else {
    paintGreetings(saveUserName);
}