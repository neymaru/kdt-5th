const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");

addBtn.addEventListener("click", function () {
  if (inputTask.value === "") {
    inputTask.setAttribute("placeholder", "내용을 입력하세요");
  } else {
    const li = document.createElement("li");
    const checkBox = document.createElement("input");
    const deleteBtn = document.createElement("button");
    checkBox.setAttribute("type", "checkbox");
    deleteBtn.textContent = "삭제";
    li.textContent = inputTask.value;
    li.prepend(checkBox);
    li.append(deleteBtn);
    todoList.append(li);

    checkBox.addEventListener("click", function () {
      if (checkBox.checked === true) {
        li.setAttribute("style", "text-decoration:line-through");
      } else {
        li.setAttribute("style", "text-decoration:none");
      }
    });

    deleteBtn.addEventListener("click", function () {
      li.remove();
    });
  }
});
