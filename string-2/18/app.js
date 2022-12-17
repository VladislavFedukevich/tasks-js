const str = "enter the value";
const vowels = ["a", "e", "i", "o", "u"];
let final_str = '';

if (isNaN(str)) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] === vowels[j]) {
        final_str += str[i];
      }
    }
  }
  console.log(final_str);
} else {
  console.log("Error");
}
