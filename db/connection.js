const mysql = require('mysql2');

//Connect to database.
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'headcount'
    },
    console.log('Connected to the headcount database.')
);

module.exports = db;