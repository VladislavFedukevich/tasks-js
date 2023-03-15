const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  try {
    if (isNaN(input.value)) throw new Error("Not a number");

    if (input.value > 0) {
      result.innerHTML = Number(input.value) * 2;
      input.value = "";
    } else {
      throw new Error("Less than 0");
    }
  } catch (error) {
    alert(error.message);
  }
});
