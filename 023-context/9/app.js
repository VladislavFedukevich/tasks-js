const n = prompt('Enter the length:');

const doArray = (length) => {
  let arr = [];

  for (let i = 0; i < length; i++) {
    const elem = prompt("Enter the value:");
    arr.push(elem);
  }

  return arr;
};

const returnNewArray = (number) => {
  let array = doArray(n);
  let finalArray = [];

  array.forEach(elem => elem > number ? finalArray.push(elem) : null);

  return finalArray;
}

console.log(returnNewArray(5));
