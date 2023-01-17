const obj = {
  name: "Vladislav",
  surname: "Fedukevich",
  course: 3,
  years: 20,
};

(function () {
  let count = 0;
  for (let key in obj) {
    count++;
  }

  console.log(count);
}(obj))
