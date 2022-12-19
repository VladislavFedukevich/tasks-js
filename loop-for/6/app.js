const email = 'fedukevi@gmail.com';

if (email.includes('@') && (email.endsWith('.com') || email.endsWith('.ru'))) {
  console.log(true);
} else {
  console.log(false);
}
