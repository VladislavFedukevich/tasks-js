const arr = [1, 2, 5, 9, 4, 13, 4, 10];
let count = 0;

for (let elem of arr) {
  if (elem === 4) {
    count++;
  }
}

console.log(count);
