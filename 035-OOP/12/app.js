class Hashtag {
  constructor(length) {
    this.length = length;
  }

  doHashtag = () => {
    try {
      const arr = [];

      if(typeof this.length !== "number" || this.length <= 0) throw new Error('Not correct length');

      for (let i = 0; i < this.length; i++) {
        arr.push("#name");
      }

      return arr;
    } catch (error) {
      return error.message;
    }
  };
}

const newArr = new Hashtag(5);
const result = newArr.doHashtag();
console.log(result);
