const str = prompt('Enter the value of string: ');

if (isNaN(str)) {
  console.log(`#${str.trim().toLowerCase().split(' ').join('')}`);
} else {
  console.log('Error');
}

