const str = prompt('Enter the value of string: ').trim().toLowerCase();

if (isNaN(str)) {
  console.log(`#${str}`);
} else {
  console.log('Error');
}
