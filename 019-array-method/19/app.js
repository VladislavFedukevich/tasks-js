// const n = prompt('Enter the length:');
const arr = [1, 2, 3, 0, 4, 5, 6];
// const second = []

// for (let i = 0; i < n; i++) {
//   const new_value = prompt('Enter the value:');
//   if (isNaN(new_value)) {
//     console.log('Error');
//   } else {
//     second.push(new_value);
//   }
// }

let sum = 0;
arr.some(elem => {
  if (elem === 0) {
    return true;
  } else {
    sum += elem;
    return false;
  }
});

console.log(sum);
