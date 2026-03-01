const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");

let todos = [];
let filter = "all";

input.addEventListener("keypress",function(e){
if(e.key==="Enter"){
addTodo(input.value);
input.value="";
}
});

function addTodo(text){
if(text==="") return;

todos.push({text:text,completed:false});
renderTodos();
}

function renderTodos(){
list.innerHTML="";

let filtered = todos.filter(todo=>{
if(filter==="active") return !todo.completed;
if(filter==="completed") return todo.completed;
return true;
});

filtered.forEach((todo,index)=>{
const li=document.createElement("li");

const checkbox=document.createElement("input");
checkbox.type="checkbox";
checkbox.checked=todo.completed;

checkbox.onclick=function(){
todo.completed=!todo.completed;
renderTodos();
};

const span=document.createElement("span");
span.innerText=todo.text;

if(todo.completed){
span.classList.add("completed");
}

li.append(checkbox,span);
list.append(li);
});

itemsLeft.innerText=
todos.filter(t=>!t.completed).length+" item left!";
}

function filterTodos(type){
filter=type;
renderTodos();
}

function clearCompleted(){
todos=todos.filter(todo=>!todo.completed);
renderTodos();
}
