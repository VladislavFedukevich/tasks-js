class WordString {
  constructor(str) {
    this.str = str;
  }

  reverseString = () => this.str.split('').reverse().join('');

  upperFirst = () => {
    return this.str.charAt(0).toUpperCase() + this.str.slice(1);
  };

  upperEvery = () => this.str.toUpperCase();
}

const str = new WordString('qweqwr');
console.log(str.upperEvery());
