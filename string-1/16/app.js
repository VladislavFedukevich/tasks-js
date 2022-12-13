const str = prompt('Enter the value: ');

if(!isNaN(str)) {
  console.log('Not string');
} else {
  console.log(str.substring(0, 1));
}
