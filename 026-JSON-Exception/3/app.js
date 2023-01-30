const value = JSON.parse("[1, 2, 3, 4, 5, 6, 7, 8]");

const validator = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Not array");
};

const parseString = (arr) => {
  try {
    validator(arr);
    return arr.filter((num) => num % 3 === 0);
  } catch (error) {
    return error;
  }
};

const result = parseString(value);
console.log(result);
