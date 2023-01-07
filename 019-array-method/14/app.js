// const n = prompt("Enter the length:");
// const array = [];

const arr = ['hschool', 'company'];

// for (let i = 0; i < n; i++) {
//   array.push(prompt('Enter the value:'));
// }

let result = arr.map(elem => {
  return `#${elem}`;
});

console.log(result);
