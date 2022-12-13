const value = prompt('Enter the value: ');

if (isNaN(value)) {
  console.log('Value is not a number');
} else {
  const squareRoot = Math.sqrt(value);
  if (Number.isInteger(squareRoot)) {
    console.log(squareRoot);
  } else {
    console.log(Math.floor(squareRoot));
  }
}
