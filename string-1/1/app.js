const firstValue = +prompt('Enter the value: ');
const secondValue = +prompt('Enter the value: ');

console.log(Math.max(firstValue, secondValue));

if (firstValue > secondValue) {
  console.log(firstValue);
} else {
  console.log(secondValue);
}

console.log(firstValue > secondValue ? firstValue : secondValue)
