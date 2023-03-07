const input = document.querySelector('input');
const result = document.querySelector('.result');
const btn = document.querySelector('button');
const arr = [];

btn.addEventListener('click', () => {
  try {
    if (!input.value) throw new Error('Input is empty');

    arr.push(input.value);
    result.innerHTML = `Result: ${arr}`;
    input.value = '';
  } catch (error) {
    alert(error.message);
    result.innerHTML += `, ${error.message}`;
    error.message.style = 'color: red';
  }
});
