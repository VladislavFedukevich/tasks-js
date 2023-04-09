class HTML {
  constructor() {
    this.bindOptions = this.bindOptions.bind(this);
  }

  bindOptions() {
    const btn = document.querySelector('button');
    const input = document.querySelector('input');
    const outputResult = document.querySelector('div');

    if (input.value) {
      btn.addEventListener('click', (event) => {
        outputResult.textContent = input.value;
      });
    } else {
      btn.disabled = true;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const html = new HTML();
  html.bindOptions();
});
