const n = prompt("Enter the length:");
const arr = [];

for (let i = 0; i < n; i++) {
  arr.push(prompt("Enter the value"));
}

let counter = 0;
arr.forEach(function (elem) {
  if (
    elem === "a" ||
    elem === "e" ||
    elem === "i" ||
    elem === "o" ||
    elem === "u"
  ) {
    return null;
  } else {
    ++counter;
  }
});

console.log(counter);
