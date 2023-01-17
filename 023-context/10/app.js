const obj = {
  name: "Vladislav",
  surname: "Fedukevich",
  course: 3,
  years: 20,
};

(function () {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key];
    }
  }
  console.log(newObj);
})(obj);
