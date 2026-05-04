const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    // Your MySQL username,
    user: process.env.DB_USER || 'username',
    // Your MySQL password 
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'election'
  });

  module.exports = db;
