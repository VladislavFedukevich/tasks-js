const str = prompt('Enter the value: ').trim();

if (isNaN(str)) {
  console.log(str[0].toUpperCase() + str.slice(1));
} else {
  console.log('Error');
}
