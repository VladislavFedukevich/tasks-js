const str = "enter the value";
const vowels = ["a", "e", "i", "o", "u"];

if (isNaN(str)) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] === vowels[j]) {
        console.log(str[i]);
      }
    }
  }
  console.log(count);
} else {
  console.log("Error");
}
