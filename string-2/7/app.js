const str = prompt('Enter the value: ');

if (isNaN(str)) {
  console.log(str.replaceAll('@', '!'));
} else {
  console.log('Error');
}
