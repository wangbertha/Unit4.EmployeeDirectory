const express = require("express");
const app = express();

const PORT = 3000;

const employees = require('./employees');

app.get('/', (req, res) => {
    res.send('Hello employees!');
})

app.get('/employees', (req, res) => {
    res.json(employees);
})

app.get('/employees/random', (req, res) => {
    const randomIndex = Math.floor((Math.random()*employees.length));
    res.json(employees[randomIndex]);
})

app.get('/employees/:id', (req, res) => {
    const { id } = req.params;

    const employee = employees.find((employee) => employee.id === +id);

    if (employee) {
        res.json(employee);
    }
    else {
        res.status(404).send('There are no employees with that id.')
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port #${PORT}`);
});