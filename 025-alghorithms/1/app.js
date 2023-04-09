// const number = 3;
// const staticArray = [1, 2, 4, 5, 3];

// const searchBinary = (elem, arr) => {
//   let startPosition = 0;
//   let endPosition = arr.length - 1;

//   for (let i = startPosition; i < endPosition; i++) {
//     let middlePosition = Math.floor((startPosition + endPosition) / 2);

//     if (arr[middlePosition] === arr[elem]) {
//       console.log(`The result is: ${arr[middlePosition]}`);
//       return elem;
//     } else if (arr[middlePosition] > arr[elem]) {
//       endPosition = middlePosition;
//       continue;
//     } else if (arr[middlePosition] < arr[elem]) {
//       startPosition = middlePosition;
//       continue;
//     }
//   }
// }

// const result = searchBinary(number, staticArray);
// console.log(result);

// function fetchData(url, options = {}) {
//   return fetch(url, options)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .catch(error => {
//       console.error(`Error fetching data: ${error}`);
//     });
// }

// const controller = new AbortController();

// console.log(fetchData('http://jsonplaceholder.typicode.com/posts', {
//   signal: controller.signal
// }));

// controller.abort();

console.log(!!'');
console.log(typeof NaN);
