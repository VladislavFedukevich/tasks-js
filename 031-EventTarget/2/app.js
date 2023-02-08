const container = document.querySelector('.container');

container.addEventListener('change', (event) => {
  alert(event.target.value);
})
