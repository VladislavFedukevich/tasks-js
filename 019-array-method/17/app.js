// const n = prompt('Enter the length:');
const arr = ['adasd', 123, 'qweqw', 1232];

// for (let i = 0; i < n; i++) {
//   arr.push(prompt('Enter the value:'));
// }

const stringArray = [];
const numberArray = [];

arr.forEach(elem => {
  if (typeof elem === "number") {
    numberArray.push(elem);
  } else {
    stringArray.push(elem);
  }
})

console.log(stringArray, numberArray);
