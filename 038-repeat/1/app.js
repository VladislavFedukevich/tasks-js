const n = prompt("Enter the length:");

const doArray = (length) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(prompt("Enter the value:"));
  }

  return arr;
};

const filteredArray = (arr) => {
  try {
    isValid(arr);

    const newArr = arr.filter((elem) => elem[0] === "a" || elem[0] === "h" ? true : false);

    return newArr;
  } catch (error) {
    return error.message;
  }
};

const isValid = (arr) => {
  arr.forEach((elem) => {
    if (!isNaN(elem)) {
      throw new Error("Not a string");
    }
  });
};

const array = doArray(n);
const newArr = filteredArray(array);
console.log(newArr);
