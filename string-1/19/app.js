const value = prompt('Enter the value: ');

if (!isNaN(value)) {
  console.log(value % 2 === 0 ? 'Even' : 'Odd');
} else {
  console.log(value === 'hschool' ? true : false);
}
