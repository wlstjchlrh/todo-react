const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", () => {
  const newTodo = todoInput.value;
  if (newTodo) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      li.classList.toggle("completed");
    });
    const span = document.createElement("span");
    span.innerText = newTodo;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "삭제";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
      li.remove();
    });
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
    todoInput.value = "";
  }
});
