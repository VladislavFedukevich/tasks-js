const number = "55639217";
const arr = number.split("");

let resultArray = "";

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
    resultArray += arr[i] + ":";
  } else {
    resultArray += arr[i];
  }
}

console.log(resultArray);
