const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const isCorrect = (str) => {
  try {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== alphabet[i]) throw new Error(`Missing the letter ${alphabet[i]}`);
    }

    return true;
  } catch (error) {
    return error.message;
  }
}

const result = isCorrect('abcdf');
console.log(result);
