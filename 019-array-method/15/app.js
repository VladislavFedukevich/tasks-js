const n = 6;
const first = [];
const second = [];

for (let i = 0; i < n; i++) {
  if (i < (n / 2)) {
    first.push(i);
  } else {
    second.push(i);
  }
}

const result = [...first, ...second];
console.log(result);
