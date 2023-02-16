const array = document.querySelector('.array');
const input = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click", function() {
  const inputValues = input.value.split(",");
  const result = {};

  for (let i = 0; i < inputValues.length; i++) {
    result[i] = inputValues[i]; 
  }

  array.innerHTML = result;
  console.log(result)
});
