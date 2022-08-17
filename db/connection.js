const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'username',
    // Your MySQL password 
    password: 'password',
    database: 'election'
  });

  module.exports = db;
