const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
const inquirer = require('inquirer');
const table = require('console.table');
const fs = require('fs');

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Use apiRoutes
app.use('/api', apiRoutes);

//Default response for any other request (not found).
app.use((req, res) => {
    res.status(400).end();
});

//Start server after DB connection.
db.connect(err => {
    if (err) throw err;
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

function init() {
    inquirer.prompt([{
        type: 'list',
        name: 'menu',
        message: 'What information would you like to see?',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add A Department',
            'Add A Role',
            'Add An Employee',
            'Update An Employee Role',
            'Exit'
        ]
    }]).then(function(menuChoice) {
        switch(menuChoice.menu) {
            case 'View All Departments':
                //Insert router.get call to routes/departmentRoutes.js for All Departments.
            break;

            case 'View All Roles':
                //Insert router.get call to routes/roleRoutes.js for All Roles.
            break;

            case 'View All Employees':
                //Insert router.get call to routes/employeeRoutes.js All Employees.
            break;

            case 'Add A Department':
                //Insert router.post call to routes/departmentRoutes.js for New Department.
            break;

            case 'Add A Role':
                //Insert router.post call to router/roleRoutes.js for New Role.
            break;

            case 'Add An Employee':
                //Insert router.post call to router/employeeRoutes.js for New Employee.
            break;

            case 'Update An Employee Role':
                //Insert router.put call to router/employeeRoutes.js to update existing employee role.
            break;
        }
    })
}

init();