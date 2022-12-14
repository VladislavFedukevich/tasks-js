const str = prompt('Enter the value: ').trim().toLowerCase();

if (isNaN(str)) {
  console.log(str.length);
} else {
  console.log('Error');
}
