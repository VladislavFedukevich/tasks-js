const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const isCorrect = (str) => {
  try {
    let startPos = alphabet.indexOf(str[0]);
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== alphabet[startPos + i]) throw new Error(`Missing the letter ${alphabet[startPos + i]}`);
    }

    return true;
  } catch (error) {
    return error.message;
  }
}

const result = isCorrect('abcdf');
console.log(result);
