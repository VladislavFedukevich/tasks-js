const v1 = prompt('Enter the value: ');
const v2 = prompt('Enter the value: ');
const S = prompt('Enter tha length: ');

if (isNaN(v1, v2, S)) {
  console.log('Error');
} else {
  console.log(`Time to drive this path is ${S / (v1 / v2)}`);
}
