let array = [3, 5, 1, 2, 4];
let max = -Infinity;

for (const value of array) {
  if (value > max) {
    max = value;
  }
}

console.log(max);
