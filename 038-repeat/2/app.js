const n = prompt("Enter the length:");

const isValid = (arr) => {
  arr.forEach((elem) => {
    if (!isNaN(elem)) throw new Error("Not a string");
  });
};

const doArray = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(prompt("Enter the value:"));
  }

  return arr;
};

const doHashtag = (arr) => {
  try {
    isValid(arr);
    const newArr = [];
    for (let elem of arr) {
      newArr.push(`#${elem}`);
    }

    return newArr;
  } catch (error) {
    alert(error.message);
  }
};

const temp = doArray(n);
console.log(doHashtag(temp));
