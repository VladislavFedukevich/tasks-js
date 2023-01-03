let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 7];
let first = [];
let second = [];

for (let i = 0; i < arr.length; i++) {
  if (i < 5) {
    first.push(arr[i]);
  } else {
    second.push(arr[i]);
  }
}

console.log(first, second);

let isIdentical = true;
first.forEach((element, index) => {
  if (element !== second[index]) {
    isIdentical = false;
  }
})

if (isIdentical) {
  console.log(true);
} else {
  console.log(false);
}
