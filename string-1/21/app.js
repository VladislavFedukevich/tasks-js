const value = prompt('Enter the value: ');

if (isNaN(value)) {
  console.log(value.toLowerCase().split('').join('-'));
} else {
  console.log('Error');
}
