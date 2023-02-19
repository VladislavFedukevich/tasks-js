class WordString {
  constructor(str) {
    this.str = str;
  }

  reverseString = () => this.str.split('').reverse().join('');

  upperFirst = () => {
    return this.str.charAt(0).toUpperCase() + this.str.slice(1);
  };

  upperEvery = () => {
    const arr = this.str.split(' ');

    const filtered = arr.map(elem => {
      return elem.charAt(0).toUpperCase() + elem.slice(1)
    })

    return filtered.join(' ');
  }
}

const str = new WordString('new new new new new');
console.log(str.upperEvery());
