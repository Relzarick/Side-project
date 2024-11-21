const todoList = [];

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button class='big red' onclick="todoList.splice(${i}, 1); renderTodoList();">Delete</button>`;

    todoListHTML += html;
  }

  document.querySelector(".js-list-div").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const dateInputElement = document.querySelector(".js-date-input");

  const dueDate = dateInputElement.value;
  const name = inputElement.value;

  // if object name and property name are the same only have to type it out once
  todoList.push({ name, dueDate });
  // console.log(todoList);

  inputElement.value = "";
  renderTodoList();
}
