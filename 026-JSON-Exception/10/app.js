const enteredString = 'feduke@gmail.com';

const isCorrectEmail = (str) => {
  try {
    if (!str.includes('@')) throw new Error('Not correct email');

    return true;
  } catch (error) {
    return error.message;
  }
}

const result = isCorrectEmail(enteredString);
console.log(result);
