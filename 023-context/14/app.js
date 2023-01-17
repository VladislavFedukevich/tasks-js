let string = 'change';

const concatFunction = () => {
  return function() {
    string += ' changed';
    console.log(string);
  }
}

let changed = concatFunction();

changed();
changed();
changed();
changed();
