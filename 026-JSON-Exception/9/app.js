const staticArray = [5, 1, 2, 3, 0, 1, 5, 0, 2];

const hasZeroNum = (arr) => {
  return arr.some((el) => el === 0);
};

const getSumResult = (arr) => {
  try {
    let sum = 0;
    hasZeroNum(arr);
    
    for (let elem of arr) {
      if (elem !== 0) {
        sum += elem;
      } else {
        break;
      }
    }

    return sum;
  } catch (error) {
    error.message;
  }
};

console.log(getSumResult(staticArray));
