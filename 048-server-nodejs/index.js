const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const arr = [1, 3, 4, 5, 5, 3, 0, 9, 5, 6];
    const uniqueArr = [];
    arr.forEach(elem => {
        if (!uniqueArr.includes(elem)) {
            uniqueArr.push(elem);
        }
    })
    res.send(uniqueArr);
})

app.get('/about', (req, res) => {
    res.send('about');
})

app.get('/contact', (req, res) => {
    res.send('contact');
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
