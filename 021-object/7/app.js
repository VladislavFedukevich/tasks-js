const obj = {
  1: 'name',
  2: 123,
  3: 12,
  4: 'string',
}

let count = 0;
for (let key in obj) {
  if (key !== null) {
    count++;
  } else {
    continue;
  }
}

if (count = 0) {
  console.log(false);
} else {
  console.log(true);
}
