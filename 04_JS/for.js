// 기본 반복문
// for (let index = 0; index < 10; index += 1) {
//   console.log(`인사를 ${index}번째 드립니다.😍`);
// }

// 2중 반복문

for (let i = 0; i < 3; i += 1) {
  console.log(`상위 for문 입니다. ${i + 1} 작동중`);
  for (let j = 0; j < 3; j += 1) {
    console.log(`   하위 for문 입니다. ${j + 1}번쩨 작동중`);
  }
}
