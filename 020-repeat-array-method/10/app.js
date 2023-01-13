const n = prompt('Enter tha value:');
const arr = [];

for (let i = 0; i < n; i++) {
  arr.push(prompt('Enter the value:'));
}

const final = arr.reduce((fact, elem) => fact *= elem, 1)
console.log(final);
