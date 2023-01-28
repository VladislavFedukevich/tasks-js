const number = 3;
const staticArray = [1, 2, 4, 5, 3];

const searchBinary = (elem, arr) => {
  let startPosition = 0;
  let endPosition = arr.length - 1;

  for (let i = startPosition; i < endPosition; i++) {
    let middlePosition = Math.floor((startPosition + endPosition) / 2);

    if (arr[middlePosition] === arr[elem]) {
      console.log(`The result is: ${arr[middlePosition]}`);
      return elem;
    } else if (arr[middlePosition] > arr[elem]) {
      endPosition = middlePosition;
      continue;
    } else if (arr[middlePosition] < arr[elem]) {
      startPosition = middlePosition;
      continue;
    }
  }
}

const result = searchBinary(number, staticArray);
console.log(result);
