const number = prompt("Enter the value: ");
const first = Math.floor(number / 1000 % 10);
const second = Math.floor(number / 100 % 10);
const third = Math.floor(number / 10 % 10);
const fourth = Math.floor(number % 10);

if (isNaN(number)) {
  console.log("Error");
} else {
  if (first % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
  if (second % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
  if (third % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
  if (fourth % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}
