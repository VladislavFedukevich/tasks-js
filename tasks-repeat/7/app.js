//first
const str = "string for testing";

console.log(str[0].toUpperCase() + str.slice(1));

//second
let result = "";

for (let i = 0; i < str.length; i++) {
  if (i === 0) {
    result += str[i].toUpperCase();
  } else {
    result += str[i];
  }
}

console.log(str);
