const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
const final_arr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (!final_arr.includes(arr[i])) {
//     final_arr.push(arr[i]);
//   }
// }

// console.log(final_arr);

for (let elem of arr) {
  if (!final_arr.includes(elem)) {
    final_arr.push(elem);
  }
}

console.log(final_arr);
