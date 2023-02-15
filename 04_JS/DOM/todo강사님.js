const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");

// onclick 으로 삭제버튼 누르면 list 삭제하기
function deleteTask(t) {
  t.parentNode.remove();
}

function addList() {
  // 입력값 없으면 place홀더 띄우기
  if (inputTask.value === "") {
    inputTask.setAttribute("placeholder", "내용을 입력하세요");
    return; // return을 만나면 함수 종료. else를 안쓰고 중첩을 피할 수 있다.
  }
  // else 에서 하려던 일을 그냥 쓰면 된다.
  const addLi = document.createElement("li");

  const checkBtn = document.createElement("input"); // 체크버튼은 input 태그의 속성이기 때문에 input으로 생성
  checkBtn.setAttribute("type", "checkbox"); // input 버튼의 타입을 checkbox로 만들기
  checkBtn.addEventListener("click", function () {
    // 다른 데서 쓸 일이 있으면 함수화, 이건 간단해서 익명함수로 함
    if (checkBtn.checked === true) {
      // li 전체에 라인 속성 주기
      checkBtn.parentNode.style.textDecoration = "line-through"; // 스타일 지정 방법 1
    } else {
      checkBtn.parentNode.setAttribute("style", "text-decoration:none"); // 스타일 지정 방법 2
    }
  });

  // 삭제 버튼
  const deleteBtn = document.createElement("button");
  // 버튼에 삭제 글자 넣기
  deleteBtn.textContent = "삭제";

  // 삭제버튼 누르면 리스트 삭제 방법 1.
  // deleteBtn.addEventListener("click", function (e) {
  //   // 쨰를 통해서 어떤 이벤트 버튼이 클릭되었는 지 확인
  //   // e target을 안주면 어떤 삭제버튼을 클릭했는 지 알 수 없음
  //   e.target.parentNode.remove(); // 버튼을 지우는게 아닌 list 전체를 삭제해야 되기 떄문에 부모 요소인 li 삭제
  // });

  // 삭제버튼 누르면 리스트 삭제 방법 2.
  deleteBtn.setAttribute("onclick", "deleteTask(this)");

  // addlist 에 체크버튼 추가
  addLi.append(checkBtn); // 체크 버튼 추가
  addLi.append(inputTask.value); // 그 뒤에 글자 추가
  addLi.append(deleteBtn); // 그 뒤에 삭제 버튼 추가

  // todolist에 addlist 추가
  todoList.appendChild(addLi);

  // input 텍스트 지우기
  inputTask.value = "";
}

addBtn.addEventListener("click", addList);
