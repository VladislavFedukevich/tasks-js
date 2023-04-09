class HTML {
  constructor(bindOptions) {
    this.bindOptions = bindOptions;
  }

  bindOptions = () => {
    const btn = document.querySelector('button');
    const input = document.querySelector('input');
    const outputResult = document.querySelector('div');

    try {
      if (!input.value) throw new Error('Input is empty');

      btn.addEventListener('click', (event) => {
        outputResult.textContent = input.value;
      })
    } catch (error) {
      alert(error.message);
    }
  }
}

const html = new HTML();
