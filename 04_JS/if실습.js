let isAdult = true;
let isVip = true;
let money = false;
let isDrunken = true;

if (((isAdult || isVip) && isDrunken) || money) {
  console.log("통과");
} else {
  console.log("돌아가");
}

// if (isAdult || isVip) {
//   if (isDrunken) {
//     if (money) {
//       console.log("통과");
//     } else {
//       console.log("돌아가");
//     }
//   } else {
//     console.log("통과");
//   }
// } else {
//   if (money) {
//     console.log("통과");
//   } else {
//     console.log("돌아가");
//   }
