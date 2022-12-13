const value = prompt('Enter the value: ');

if (isNaN(value)) {
  console.log(value.split(''));
} else {
  console.log('Error');
}
