const img = document.querySelector('.img');

img.addEventListener('mouseover', () => {
  this.style = 'background-image: url(./assets/HS\ \(11\).png)'
})

img.addEventListener('mouseout', () => {
  this.style = 'background-image: url(./assets/HS\ \(10\).png)'
})
