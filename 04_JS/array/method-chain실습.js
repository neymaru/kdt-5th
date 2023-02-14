const KdtCurriculum = ["HTML", "CSS", "JS", "BACKEND", "REACT"];

const result1 = KdtCurriculum.shift().split("").reverse().join("");
const result2 = KdtCurriculum.pop().split("").reverse().join("");
console.log(result1);
console.log(result2);
