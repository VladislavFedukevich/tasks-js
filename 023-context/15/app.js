const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getSum = (arr) => {
  let sum = arr.shift();

  if (arr.length !== 0) {
    sum += getSum(arr);
  }

  return sum;
}

console.log(getSum(arr));
