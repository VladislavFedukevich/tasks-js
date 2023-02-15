const btn = document.querySelector(".button");
const input = document.querySelector("input");
const unique = document.querySelector(".unique");
const array = document.querySelector(".array");
let arr = [];
let arrUnique = [];

btn.addEventListener('click', () => {
  try {
    if (!input.value) throw new Error('Input is empty');

    arr.push(input.value);

    arr.forEach(elem => {
      if (!arrUnique.includes(elem)) {
        arrUnique.push(elem);
      }
    })

    unique.innerHTML = arrUnique;
    array.innerHTML = arr;
    input.value = '';
  } catch (error) {
    alert(error.message);
  }
})
