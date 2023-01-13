const obj = {
  1: 'name',
  2: 123,
  3: 'value',
  4: 'string',
}

const arr = [];
for (let key in obj) {
  key % 2 === 1 ? arr.push(key) : null;
}

console.log(arr);
