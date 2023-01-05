const n = prompt('Enter the length:');
const arr = [];

for (let i = 0; i < n; i++) {
  arr.push(prompt('Enter the value'));
}

const result = arr.map(elem => {
  if (elem % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
})

console.log(result);
