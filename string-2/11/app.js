const str = prompt('Enter the value: ');

if (isNaN(str)) {
  console.log(str.split('-').join('!'));
} else {
  console.log('Error');
}
