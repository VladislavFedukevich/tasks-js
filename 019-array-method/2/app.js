const value = 5;
const arr = [];
const final = [];

const first = prompt("Enter the first value: ");
const second = prompt("Enter the second value: ");

for (let i = 0; i < value; i++) {
  const new_value = prompt("Enter the new value: ");
  arr.push(new_value);
}

arr.forEach(elem => {
  if (!isNaN(elem) && elem !== first && elem !== second) {
    final.push(elem);
  }
})

if (final.length === 0) {
  console.log('Array is empty');
} else {
  console.log(final);
}
