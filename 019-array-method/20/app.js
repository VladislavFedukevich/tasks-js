// const n = prompt('Enter the length:');
const arr = [1, -2, -3, 0, 4, -5, 6];
// const second = []

// for (let i = 0; i < n; i++) {
//   const new_value = prompt('Enter the value:');
//   if (isNaN(new_value)) {
//     console.log('Error');
//   } else {
//     second.push(new_value);
//   }
// }

const result = arr.filter(elem => {
  return elem >= 0;
})

console.log(result);
