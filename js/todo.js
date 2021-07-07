const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    // JSON.stringify() : string의 형태로 바꿔주는 함수
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));          // li.id의 형태는 string이므로 toDo.id와 형태를 같게 해야한다. (parseInt함수 사용)
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
 
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;    // input의 현재 저장된 값을 새로운 변수에 저장.
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),                 // id를 부여하는 이유는 각 item끼리의 구별을 짓기 위함.
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    // JSON.parse() : string의 형태를 array의 형태로 바꿔주는 함수
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}