const arr = [1, 3, -5, 10, -32, 6, -6];
let sum = 0;

for (let elem of arr) {
  if (elem >= 0) {
    sum += elem;
  }
}

console.log(sum);
