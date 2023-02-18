// JS 구현
const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const content = document.querySelector("#content");
const btn = document.querySelector("button");

let targetEl;

function calendarTask(e) {
  targetEl = e.target;
  // console.log(targetEl.tagName);
  if (targetEl.tagName === "P") {
    date.value = `2023년 2월 ${targetEl.textContent}일 `;
  } else if (targetEl.tagName === "TD") {
    date.value = `2023년 2월 ${targetEl.children[0].textContent}일 `;
  } else if (targetEl.tagName === "DIV") {
    targetEl.remove();
  }
}

function writeSchedule() {
  if (date.value === "" && content.value === "") {
    date.setAttribute("placeholder", "날짜를 입력해주세요");
    content.setAttribute("placeholder", "내용을 입력해주세요");
    return;
  } else if (date.value === "") {
    date.setAttribute("placeholder", "날짜를 입력해주세요");
    return;
  } else if (content.value === "") {
    content.setAttribute("placeholder", "내용을 입력해주세요");
    return;
  }
  const addDiv = document.createElement("div");
  addDiv.textContent = content.value;
  if (targetEl.tagName === "P") {
    targetEl.parentNode.append(addDiv);
  } else if (targetEl.tagName === "TD") {
    targetEl.append(addDiv);
  }
  content.value = "";
  date.value = "";
}

calendar.addEventListener("click", calendarTask);
