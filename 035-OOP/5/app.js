class Anagram {
  constructor(firstWord, secondWord) {
    this.firstWord = firstWord;
    this.secondWord = secondWord;
  }

  #validation = () => {
    return (typeof this.firstWord === "string" && typeof this.secondWord === "string");
  }

  checkAnagram = () => {
    try {
      if (!this.#validation()) throw new Error('Not a string format');

      const firstArray = this.firstWord.split("");
      const secondArray = this.secondWord.split("");
      let count = 0;

      if (firstArray.length !== secondArray.length) {
        throw new Error("Not an anagram");
      } else {
        firstArray.forEach((elem) => {
          if (secondArray.includes(elem)) {
            count++;
          }
        });
      }

      return count === firstArray.length;
    } catch (error) {
      return error.message;
    }
  };
}

const check = new Anagram('asv', "sav");
const result = check.checkAnagram();
console.log(result);
