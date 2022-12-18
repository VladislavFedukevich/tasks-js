const str = prompt('Enter the value of string: ').trim().toLowerCase();

if (isNaN(str)) {
  console.log(str.repeat(3));
} else {
  console.log('Error');
}
