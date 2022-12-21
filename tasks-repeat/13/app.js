let array = [-1, 2, -3, 4, 5];
let min = Infinity;

for (let i = 0; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}

console.log(min);
