const express = require('express')
const app = express();
const port = 8080

app.get('/', (req, res) => res.send('Sunday |Development'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);