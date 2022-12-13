const value = prompt('Enter the value: ');
const first = Math.round(value / 100 % 10);
const second = Math.round(value / 10 % 10);
const third = Math.round(value % 10);

if (isNaN(value)) {
  console.log('Error');
} else {
  console.log(`Compose: ${first * second * third}`);
  console.log(`Sum: ${first + second + third}`);
}
