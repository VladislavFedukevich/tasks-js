const str = "Fedukevich Vladislav".trim().split(' ');

if (isNaN(str)) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].charAt(0).toUpperCase()) {
      console.log(true);
    } else {
      console.log(false)
    }
  }
} else {
  console.log("Error");
}
