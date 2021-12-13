const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('../db/connection');

//Create function that would get all departments
function getAllDepartments() {
    const sql = `SELECT * FROM departments`
    db.query(sql, (err, res) => {
        if (err) throw err
        console.table(res)
    })
};
//Create function that would create new department

module.exports = departmentRoutes;