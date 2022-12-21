const arr = [1, 2, 4, 5, 6];
const value = 3;

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === value) {
    console.log("Yes");
    break;
  } else {
    sum += arr[i];
  }
}

console.log(sum / arr.length);
