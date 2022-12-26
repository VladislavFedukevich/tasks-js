const numElements = prompt("Enter the number of elements for the array:");

if (isNaN(numElements)) {
  console.log("Please enter a valid number.");
} else {
  const arr = [];

  for (let i = 0; i < numElements; i++) {
    const element = prompt(`Enter element`);
    if (isNaN(element)) {
      console.log("Is not a number");
      i--;
    } else {
      arr.push(element);
    }
  }
  console.log(arr);
}
