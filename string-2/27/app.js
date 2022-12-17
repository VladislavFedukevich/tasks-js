const url = "http://chat.openai.com";

if (
  url.startsWith('http') &&
  url.includes("/") &&
  (url[url.length - 1] === "com" || url[url.length - 1] === "com")
) {
  console.log(true);
} else {
  console.log(false);
}


console.log(url[url.length - 1] === "com")
