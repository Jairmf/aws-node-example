const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('Hello World');
    res.send('<h1>API IS UP!</h1>');
});

app.listen(3000);
console.log('Server is running on port 3000');
