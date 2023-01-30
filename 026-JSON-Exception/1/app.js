const input = 4;

const isValid = (value) => {
  try {
    if (typeof input === 'number' && input % 2 !== 0) {
      throw new Error('Input is an odd number');
    } else {
      return 'Even';
    }

  } catch (error) {
    return error;
  }
}

const result = isValid(input);
console.log(result);
