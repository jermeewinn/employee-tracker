const mysql = require('mysql2');

//Connect to database.
const db = mysql.createConnection(
    {
        host: 'localhost',
        usesr: 'root',
        password: 'password',
        database: 'headcount'
    },
    console.log('Connected to the headcount database.')
);

module.exports = db;