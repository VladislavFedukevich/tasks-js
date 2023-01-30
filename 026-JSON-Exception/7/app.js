const stringValue = prompt('Enter the value:');

const squareNumbers = (stringValue) => {
  try {
    return stringValue.trim().split('').map(elem => elem ** 2).join('');
  } catch (error) {
    return error.message;
  }
}

const result = squareNumbers(stringValue);
console.log(result);
