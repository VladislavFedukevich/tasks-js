let startString = 'Позволяеткопироватьтекстиз'.toLowerCase().split('');

(function(str) {
  let finalString = '';
  str.forEach(elem => !finalString.includes(elem) ? finalString += elem : null);
  console.log(finalString);
}(startString));
