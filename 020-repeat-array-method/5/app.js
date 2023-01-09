const n = prompt("Enter the array");
const arr = [];
const result = [];

for (let i = 0; i < n; i++) {
  arr.push(prompt('Enter the value'));
}

const filtered = arr.filter((elem) => {
  if (
    elem === "a" ||
    elem === "e" ||
    elem === "u" ||
    elem === "i" ||
    elem === "o"
  ) {
    return true;
  }
});

console.log(filtered);
