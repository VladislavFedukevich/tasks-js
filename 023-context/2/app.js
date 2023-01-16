let length = prompt("Enter the length:");

const doArray = (size) => {
  let arr = [];

  for (let i = 0; i < size; i++) {
    const elem = prompt("Enter the value:");
    arr.push(elem);
  }

  return arr;
};

const findMaxLength = (array) => {
  let max = 0;
  array.forEach((elem) => {
    if (elem.length > max) {
      max = elem.length;
    }
  });

  return max;
};

const arr = doArray(length);
console.log(findMaxLength(arr));
