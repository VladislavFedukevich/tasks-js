const str = prompt('Enter the value: ');

if (isNaN(str)) {
  console.log(str.split(''));
} else {
  console.log(str % 2 === 0 ? 'Evev' : 'Odd');
}
