const result = document.querySelector(".container");

const generate = () => {
  const arr = [];
  for (let i = 0; i < 15; i++) {
    arr.push(Math.floor(Math.random() * 101));
  }

  return arr;
};

const numbers = generate();

result.innerHTML = numbers.map((num) => `<div>${num}</div>`).join("");

result.addEventListener("click", (event) => {
  const clickedElement = event.target;

  if (clickedElement.tagName === "DIV") {
    const value = parseInt(clickedElement.innerText);
    const index = numbers.indexOf(value);
    if (index !== -1) {
      numbers.splice(index, 1);
      result.removeChild(clickedElement);
    }
  }
});
