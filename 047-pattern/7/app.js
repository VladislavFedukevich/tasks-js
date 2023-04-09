const result = document.querySelector('.result');
const input = document.querySelector('input');
const array = document.querySelector('.array');
const btn = document.querySelector('button');
const arr = [];

const filterArray = (arr) => {
    return arr.filter(elem => elem % 3 === 0);
}

btn.addEventListener('click', () => {
    try {
        if (!input.value) throw new Error('Empty input');
        arr.push(input.value);

        array.innerHTML = arr;
        result.innerHTML = filterArray(arr);

        input.value = '';
    } catch (error) {
        alert(error.message);
    }
});
