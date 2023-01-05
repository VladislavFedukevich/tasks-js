const n = prompt('Enter the length:');
const arr = [];
let sum = 1;

for (let i = 0; i < n; i++) {
  arr.push(prompt('Enter the value:'));
}

arr.forEach(elem => {
  if (isNaN(elem)) {
    console.log('Error');
  } else {
    sum *= elem;
  }
})

console.log(sum)

let result = arr.reduce((sum, elem) => {
  if (isNaN(elem)) {
    console.log('Error');
  } else {
    return sum * elem;
  }
}, 1);

console.log(result);
