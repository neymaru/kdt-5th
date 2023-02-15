// JS 구현
const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const input = document.querySelector("#content");

// 클릭 된 요소를 저장하기 위한 전역 변수
let targetEl;

// 2. calendarTask 함수
function calendarTask(e) {
  // 3. 뭘 클릭했는지 알아야 하기 때문에 event 객체 매개변수 입력
  if (e.target.tagName === "P") {
    // 숫자를 선택했을 때
    date.value = `2023년 2월 ${e.target.textContent}일`; // 여기서 e.target 은 p 나 td
    targetEl = e.target.parentNode; // targetEl 전역변수에 p의 부모인 td 의 위치를 저장
  } else if (e.target.tagName === "TD") {
    // 숫자 외 공백 부분을 선택했을 때
    const day = e.target.children[0].textContent; // childNode 를 쓰면 원치않는 요소까지 불러와서 children
    date.value = `2023년 2월 ${day}일`; // 여기서 e.target 은 p 나 td
    targetEl = e.target; // 어떤 위치를 클릭했는지 지역변수가 기억하게
  } else if (e.target.tagName === "DIV") {
    // 5. 날짜 클릭하면 삭제시키기 방법 2. (div 태그 클릭하면 지우기)
    e.target.remove();
  }
}

// 4. onclick 함수 구현
function writeSchedule() {
  // 6. 내용을 입력하지 않고 작성버튼 누르면 안내문구 띄우기
  if (input.value === "" && date.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요.");
    date.setAttribute("placeholder", "날짜를 선택하세요");
    return;
  } else if (input.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요.");
    return;
  } else if (date.value === "") {
    date.setAttribute("placeholder", "날짜를 선택하세요");
    return;
  }

  const addDiv = document.createElement("div"); // 추가를 위한 div 요소 만들기
  addDiv.textContent = input.value; // input의 value 값을 addDiv 에 넣기

  // // 5. 날짜 클릭하면 삭제시키기 방법 1. (기능을 장착 시키고 밑에 appned로 추가)
  // addDiv.addEventListener("click", function () {
  //   // div 요소를 클릭하면
  //   addDiv.remove(); // 자기 자신을 지우기
  // });

  targetEl.append(addDiv); // 어느 td 에 넣을 지는 targetEl 이 기억하고 있다.
  input.value = ""; // input 태그의 문자를 사라지게
}

// 1. 달력 내에서 클릭 이벤트 발생했을 시 실행
calendar.addEventListener("click", calendarTask);
