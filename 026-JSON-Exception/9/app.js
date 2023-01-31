const staticArray = [5, 1, 2, 3, 0, 1, 5, 0, 2];

const isNumberArray = (arr) => {
  arr.forEach((elem) => {
    if (isNaN(elem)) throw new Error(`Incorrect array: not only numbers`);
  });
};

const hasZeroNum = (arr) => {
  const bool = arr.some((elem) => elem === 0);
  if (!bool) throw new Error("No 0 in array");
};

const getSumResult = (arr) => {
  try {
    let sum = 0;
    hasZeroNum(arr);
    isNumberArray(arr);

    for (let elem of arr) {
      if (elem === 0) break;
      sum += elem;
    }

    return sum;
  } catch (error) {
    return error.message;
  }
};

console.log(getSumResult(staticArray));
