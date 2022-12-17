const str = "EnrTTTer the value".trim();
let new_str = "";

if (isNaN(str)) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      new_str += str[i].toLowerCase();
    } else if (str[i] === str[i].toLowerCase()) {
      new_str += str[i].toUpperCase();
    }
  }
  console.log(new_str);
} else {
  console.log("Error");
}
