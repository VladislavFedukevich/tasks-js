const number = 12345;

const sumOfExponentiation = (number) => {
  try {
    let sum = 0;
    const numStr = number.toString();
    for (let i = 0; i < numStr.length; i++) {
      const digit = Number(numStr.charAt(i));
      sum += Math.pow(digit, i);
    }
    return sum;
  } catch (error) {
    console.error(error);
  }
};

const result = sumOfExponentiation(number);
console.log(result);
