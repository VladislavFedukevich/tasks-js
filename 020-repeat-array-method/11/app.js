const n = prompt('Enter the length:');
const arr = [];

for (let i = 0; i < n; i++) {
  arr.push(prompt('Enter the value'));
}

const odd = [];
const even = [];
arr.forEach(elem => {
  if (elem % 2 === 0) {
    even.push(elem);
  } else {
    odd.push(elem);
  }
})

console.log(even, odd);
