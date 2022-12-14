const str = "enter the value".toLowerCase().split(' ');

if (isNaN(str)) {
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(str.join(' '))
} else {
  console.log("Error");
}
