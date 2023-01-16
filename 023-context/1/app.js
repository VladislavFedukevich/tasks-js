const n = prompt("Enter the value:");

const reverseNumber = (number) => {
  return number.split("").reverse().join("");
};

console.log(reverseNumber(n));
