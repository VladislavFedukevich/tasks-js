const obj = {
  id: 2,
  3: 'hschool',
  value: 10,
}

for (let key in obj) {
  if (!isNaN(key))
    console.log(key)
}
