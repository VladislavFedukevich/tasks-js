const n = prompt("Enter the length:");
const arr = [];

for (let i = 0; i < n; i++) {
  arr.push(+prompt("Enter the value"));
}

console.log(arr.reduce((sum, elem) => (sum += elem), 0));
