const obj = {
  1: 'name',
  2: 123,
  3: 12,
  4: 'string',
}

let pairs = 0;

for (let key in obj) {
  if (!isNaN(obj[key]))
  pairs++;
}

console.log(pairs);
