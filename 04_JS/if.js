// if문
if (false) {
  console.log("true 입니다.");
} else if (true) {
  console.log("elseif 내부 입니다.");
} else {
  console.log("false입니다.");
}

// 조건 비교
let age = 33;

if (age > 40) {
  console.log("늙었습니다.");
} else if (age <= 40 && age >= 20) {
  console.log("그는 MZ입니다.");
} else {
  console.log("애기 입니다");
}

// if문 중첩
let isOld = false;
let isRich = false;

if (isOld) {
  if (isRich) {
    console.log("망했어요");
  } else {
    console.log("낫베드");
  }
} else {
  if (isRich) {
    console.log("대박");
  } else {
    console.log("부럽");
  }
}
