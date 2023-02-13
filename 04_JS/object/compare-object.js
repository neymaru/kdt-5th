const tetz = {
  name: "김성현",
  email: "asdf@asdf.asdf",
};
const kim = {
  name: "김성현",
  email: "asdf@asdf.asdf",
};

// console.log(tetz.name === kim.email);

const tetzCopy = tetz;

tetzCopy.name = "Tetz";

console.log(tetz);
console.log(tetzCopy);
console.log(tetz === tetzCopy);
