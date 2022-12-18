const url = 'https://www.instagram.com/hschool.official/';

if (url.startsWith('http') || url.startsWith('https')) {
  console.log(url.slice(url.indexOf('//') + 2));
} else {
  console.log('Error');
}
