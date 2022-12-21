const arr = [1, 2, 3, 4, 5, 6, 7];

let sum = 1;

for (let elem of arr) {
  sum *= elem;
}

console.log(sum);
