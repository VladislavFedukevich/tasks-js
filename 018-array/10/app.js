const arr =  [1, 2, 2, 3, 4, 4, 3, 4, 5].sort();
const final_arr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
    final_arr.push(arr[i]);
  }
}

console.log(final_arr);
