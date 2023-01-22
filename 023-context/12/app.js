// const obj = {
//   name: "Vladislav",
//   surname: "Fedukevich",
//   course: 3,
//   years: 20,
// };

// (function () {
//   let count = 0;
//   for (let key in obj) {
//     count++;
//   }

//   console.log(count);
// })(obj);

function getSum(arr, sum) {
  sum = 0;
  if (arr.length !== 0) {
    return getSum(arr, sum + arr.pop())
  }
  return getSum;
}

console.log(getSum([1, 2, 3, 4, 5, 6], 0));
