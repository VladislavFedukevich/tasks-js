class Hashtag {
  constructor(length) {
    this.length = length;
  }

  doHashtag = () => {
    const arr = [];

    for (let i = 0; i < this.length; i++) {
      arr.push('#name');
    }

    return arr;
  }
}

const newArr = new Hashtag(7);
const result = newArr.doHashtag();
console.log(result);
