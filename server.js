const mysql = require('mysql2');
const db = require('./db/connection');
const inquirer = require('inquirer');
const table = require('console.table');
const { test } = require('media-typer');

//Start server after DB connection.
db.connect(err => {
    if (err) throw err;
    console.log('Database connected');
});

function init() {
    return inquirer.prompt([{
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
    }]).then(({ menu }) => {
        switch(menu) {
            case 'View All Departments':
                getAllDepartments();
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
            case 'Exit':
                //Insert js logic to leave the inquirer.prompt.
        }
    })
}
//Call for View All Departments.
function getAllDepartments() {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, res) => {
        if (err) {
            throw err;
        } else {
        console.table(res);
        }
    }) 
    init()
};

init();