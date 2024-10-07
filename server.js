const express = require("express");
const app = express();

const PORT = 3000;

const employees = require('./employees');

app.get('/', (req, res) => {
    res.send('Hello employees!');
})

app.listen(PORT, () => {
    console.log(`Listening on port #${PORT}`);
});