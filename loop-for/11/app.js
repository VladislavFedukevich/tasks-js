const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let str = "-";

for (let elem of arr) {
  str += `${elem}-`;
}

console.log(str);
