// JS 구현
const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const content = document.querySelector("#content");
const td = document.querySelectorAll("td");

// 클릭 된 요소를 저장하기 위한 전역 변수
let targetEl;

function calendarTask(e) {
  targetEl = e.target;
  if (targetEl.tagName === "P") {
    date.value = `2023년 2월 ${targetEl.textContent}일`;
  } else if (targetEl.tagName === "TD") {
    date.value = `2023년 2월 ${targetEl.children[0].textContent}일`;
  }
}

calendar.addEventListener("click", calendarTask);

function writeSchedule() {
  if (content.value === "") {
    return;
  }
  const newDiv = document.createElement("div");
  newDiv.innerText = content.value;

  if (targetEl.tagName === "p") {
    targetEl.parentNode.append(newDiv);
  } else if (targetEl.tagName === "TD") {
    targetEl.append(newDiv);
  }
}

td[0].addEventListener("click", function (e) {});

// function deleteContent(e) {
//   targetEl = e.target;
//   targetEl.
// }
