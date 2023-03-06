const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const result = document.querySelector('.result');
const arr = [];

btn.addEventListener('click', () => {
  try {
    if (!input.value) throw new Error('Input is empty');

    arr.push(input.value);

    result.innerHTML = arr;
  } catch (error) {
    alert(error.message);
  }
});
