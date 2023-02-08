const btn = document.querySelector('button');
const p = document.querySelector('p');

btn.addEventListener('mouseover', () => {
  p.innerHTML = 'Hi!!!';
});

btn.addEventListener('mouseout', () => {
  p.innerHTML = '';
})
