const n = prompt('Enter the length');
const arr = [];

for (let i = 0; i < n; i++) {
  arr.push(+prompt('Enter the value'));
}

let max = 0;
let min = 1;
arr.forEach(elem => {
  if (elem < min) min = elem;
  if (elem > max) max = elem;
})

console.log(min, max);
