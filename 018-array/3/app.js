const arr = [2, 3, 4, 5];
let sum1 = 1;

for (let elem of arr) {
  sum1 *= elem;
}
console.log(sum1);

let sum2 = 1;
for (let i = 0; i < arr.length; i++) {
  sum2 *= arr[i];
}
console.log(sum2);

let sum3 = 1;
let i = 0;
while (i < arr.length) {
  sum3 *= arr[i];
  i++;
}
console.log(sum3);
