const array = [];

while (array.length < 5) {
  const element = prompt("Enter a number: ");
  if (isNaN(element)) {
    console.log("Error");
  } else {
    array.push(element);
  }
}

console.log(array);

for (let i = 0; array.length < 5; i++) {
  const element = prompt("Enter a number:");
  if (isNaN(element)) {
    console.log("Error");
  } else {
    array.push(element);
  }
}

console.log(array);
