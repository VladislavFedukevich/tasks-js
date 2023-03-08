class WordString {
  constructor(str) {
    this.str = str;
  }

  reverseString = () => {
    return this.str.split('').reverse().join('');
  }
}

const wordString = new WordString('asdgg');
const reversed = wordString.reverseString();
console.log(reversed);
