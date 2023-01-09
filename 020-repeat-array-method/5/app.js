const n = prompt('Enter the length');
const arr = [];

for (let i = 0; i < n; i++) {
  arr.push(prompt('Enter the value'));
}

let max = 0;
let filtered = arr.filter(elem => {
  if (elem > max) {
    max = elem;
    return max;
  }
})

console.log(max);
