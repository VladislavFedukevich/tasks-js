const a = prompt("amount of elem");
const arr = [];
let final = [];

for (let i = 0; i < a; i++) {
  const value = prompt("enter elem");
  if (!isNaN(value)) {
    arr.push(Number(value));
  }
}

arr.forEach(function (elem) {
  if (!final.includes(elem)) {
    final.push(elem);
  }
});

if (final.length === 0) {
  console.log("Array is empty");
} else {
  console.log(final);
}
