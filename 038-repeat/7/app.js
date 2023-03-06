const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const result = document.querySelector(".result");
const double = document.querySelector(".double");
const arr = [];
const doubleArr = [];

btn.addEventListener("click", () => {
  try {
    if (!input.value) throw new Error("Input is empty");
    if (isNaN(input.value)) throw new Error('Not a number');

    arr.push(input.value);
    doubleArr.push(input.value * 2);

    result.innerHTML = arr;
    double.innerHTML = doubleArr;
    input.value = "";

  } catch (error) {
    alert(error.message);
  }
});
