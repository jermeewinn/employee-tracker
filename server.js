const mysql = require('mysql2');
const db = require('./db/connection');
const inquirer = require('inquirer');
const table = require('console.table');

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
                getAllRoles();
                break;

            case 'View All Employees':
                getAllEmployees();
                break;

            case 'Add A Department':
                addNewDepartment();
                break;

            case 'Add A Role':
                addNewRole();
                break;

            case 'Add An Employee':
                addNewEmployee();
                break;

            case 'Update An Employee Role':
                updateEmployee();
                break;
            case 'Exit':
                process.exit();
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
            console.log("\n");
            console.table(res);
        }
    }); 
    init()
};
//Call for View All Roles.
function getAllRoles() {
    const sql = `SELECT * FROM roles`;
    db.query(sql, (err, res) => {
        if (err) {
            throw err;
        } else {
            console.log("\n");
            console.table(res);
        }
    });
    init()
};
//Call for View All Employees.
function getAllEmployees() {
    const sql = `SELECT * FROM employees`;
    db.query(sql, (err, res) => {
        if (err) {
            throw err;
        } else {
            console.log("\n");
            console.table(res);
        }
    });
    init()
};
//Call for Add A Department.
function addNewDepartment() {
    return inquirer.prompt({
        type: 'input',
        name: 'addNewDepartment',
        message: 'What department would you like to add?'
        }).then(({ addNewDepartment }) => {
        const sql = `INSERT INTO departments (dept_name)
                    VALUES (?)`;
        const params = [addNewDepartment]
        db.query(sql, params, err => {
            if (err) {
                throw err;
            } else {
                getAllDepartments();
            };
        });

    init()
    });
};
//Call for Add A Role.
function addNewRole() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What role would you like to add?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for the role?'
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'What is the department_id of the role?'
        }

    ]).then(({ title, salary, department_id }) => {
        const sql = `INSERT INTO roles (title, salary, department_id)
                    VALUES (?,?,?)`;
        const params = [title, salary, department_id];
        db.query(sql, params, err => {
            if (err) {
                throw err;
            } else {
                getAllRoles();
            };
        });

    init()
    });
};
//Call for Add An Employee.
function addNewEmployee() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "What is the new employee's first name?"
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What is the new employee's last name?"
        },
        {
            type: 'input',
            name: 'role_id',
            message: "What is the new employee's role ID?"
        },
        {
            type: 'input',
            name: 'manager_id',
            message: "Who is the new employee's manager ID?"
        }
    ]).then(({ first_name, last_name, role_id, manager_id }) => {
        const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
                    VALUES (?,?,?,?)`;
        const params = [first_name, last_name, role_id, manager_id];
        db.query(sql, params, err => {
            if (err) {
                throw err
            } else {
                getAllEmployees();
            }
        });

    init();
    });
};
//Call for Update An Employee Role.
// function updateEmployee {

// }

init();