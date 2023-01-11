const n = prompt("Enter the length:");
const arr = [];

for (let i = 0; i < n; i++) {
  arr.push(prompt("Enter the value"));
}

let counter = 0;
arr.forEach(elem => {
  if (elem === arr[elem]) {
    ++counter;
  }
})

console.log(counter);
