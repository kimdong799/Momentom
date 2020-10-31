const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function filterFn(toDo){
  return toDo.id === 1;
}

let toDos = [];

function deleteToDo(event){
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id); // 모든 toDos가 li의 id가 같지 않을 때
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos(){
  // 로컬스토리지에는 STRING으로 저장되기에 JS데이터 저장 불가 따라서 object로 저장된 TODOLIST ELEMENT를 STRING으로 변환하기위해 JSON.stringify 사
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
  const li = document.createElement("li"); // li태그생성
  const delBtn = document.createElement("button");
  delBtn.innerText = "x";
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  span.innerText = ` ${text}`;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; // submit 역할
}

function something(toDo){
  paintToDo(toDo.text);
}

function loadTodos(){
  const loadToDos = localStorage.getItem(TODOS_LS);
  if(loadToDos !== null){
    // STRING으로 저장된 데이터를 다시 OBJECT로 변환
    const parsedToDos = JSON.parse(loadToDos);
    parsedToDos.forEach(something);
  }
}

function init(){
  loadTodos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
