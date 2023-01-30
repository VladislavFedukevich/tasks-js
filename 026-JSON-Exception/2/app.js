const arr = [1, 2, 3, 4, 5, 'string', 6, 'name'];

const hasString = (arr) => {
  try {
    for (let elem of arr) {
      if (typeof elem === 'string') {
        throw new Error ('This is a string element');
      }
    }
  } catch (err) {
    return err;
  }
}

const result = hasString(arr);
console.log(result);
