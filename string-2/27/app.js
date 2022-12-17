const url = "http://chat.openai.com";

if (
  url.startsWith('http') &&
  url.includes("/") &&
  (url.endsWith('com') || url.endsWith('ru'))
) {
  console.log(true);
} else {
  console.log(false);
}
