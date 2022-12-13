const value = prompt('Enter the value: ');

if (isNaN(value)) {
  console.log('Error');
} else if (Number(value) === 0){
  console.log('The reverse number does not exist');
} else {
  console.log(`Reverse number: ${1 / value}`);
}
