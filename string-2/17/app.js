const str = 'enter the value';
const vowels = ['a', 'e', 'i', 'o', 'u']

if (isNaN(str)) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" &&
    str[i] !== "o" && str[i] !== "u" && str[i] !== " ") {
      count++
    }
  }
  console.log(count)
} else {
  console.log('Error');
}
