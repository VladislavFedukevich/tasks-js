const staticArray = [1, 2, 3, 4, 5, 6];
// const n = prompt('Enter the length:');
const n = 3;

// if (isNaN(n) || n > staticArray.length || n === 0 || n === '') {
//   console.log('Error');
// }

let arr = [];
for (let i = 0; i < staticArray.length; i += n) {
  arr.push(staticArray.slice(i, i + n));
}

console.log(arr);
