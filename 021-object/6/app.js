const obj = {
  1: 'name',
  2: 123,
  3: 12,
  4: 'string',
}

const arr = [];
for (let key in obj) {
  if (!isNaN(obj[key])) {
    arr.push(obj[key] * 2);
  }
}

console.log(arr);
