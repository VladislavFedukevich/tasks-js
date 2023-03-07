const list = document.querySelector('.list');
const item = document.querySelectorAll('li');
const result = document.querySelector('.result');

list.addEventListener('click', (event) => {
  result.innerHTML += event.target.textContent + ' ';
})
