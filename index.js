const express = require('express');

const app = express();

app.use('', (req, res) => {
    res.send('Hola mundo en Express')
});

app.listen(3000);