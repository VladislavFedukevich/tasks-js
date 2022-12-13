const first = prompt('Enter the value: ');
const second = prompt('Enter the value: ')

if (isNaN(first) || isNaN(second)) {
  console.log('Error');
} else if (first < 0 || first > 10 || second < 0 || second > 10) {
  console.log('Not correct values');
} else {
  console.log(`I'm ${first}${second}`);
}
