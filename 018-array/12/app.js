const arr = [2, 5, 9, 15, 0, 4];

let i = 0;
while (i < arr.length) {
  if (arr[i] % 5 === 0) {
    console.log(arr[i]);
  }
  i++;
}
