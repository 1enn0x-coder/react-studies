import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "MySQLMastermz1@",
  database: "mydb",
  port: 3310,
});

export default pool;
