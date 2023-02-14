let orangeClass = document.querySelector(".orange");
console.log(orangeClass);

let skyblueId = document.querySelector("#skyblue");
console.log(skyblueId);

let secondLi = document.querySelector("ul>li:nth-child(2)");
secondLi.classList.add("orange");
console.log(secondLi);

let removeOrange = document.querySelector(".orange");
if (removeOrange.classList.contains("orange")) {
  removeOrange.classList.remove("orange");
}
console.log(removeOrange);
