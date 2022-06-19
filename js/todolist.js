//변수
const todoForm = document.getElementById("todoForm"),
todoInput = document.querySelector("#todoForm input"),
todoList = document.getElementById("todoList");

const TODOS_KEY = "todos";

let toDos = [];

//함수
function saveTodos () {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo (event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo (newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo;
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.setAttribute("class", "fas fa-times");
    // innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function todoFormSubmit (event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", todoFormSubmit);

const saveToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos !== null) {
    const parseTodos = JSON.parse(saveToDos);
    toDos = parseTodos;
    parseTodos.forEach(paintTodo);
}
