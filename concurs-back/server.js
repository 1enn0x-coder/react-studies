import express from "express";

import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "MySQLMastermz1@",
  database: "mydb",
  port: 3306,
});

const app = express();

app.use(express.json());

app.post("/addStudent", async (req, res) => {
  try {
    const {
      name,
      lastname,
      mail,
      phone_number,
      class_number,
      region,
      nickname,
      password,
      is_active,
    } = req.body;

    const sql = `
      INSERT INTO students
      (name, lastname, mail, phone_number, class_number, region, nickname, password, is_active)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await pool.query(sql, [
      name,
      lastname,
      mail,
      phone_number,
      class_number,
      region,
      nickname,
      password,
      is_active,
    ]);

    res.status(201).json({
      message: "Student added successfully",
      result,
    });
  } catch (error) {
    console.log("error here => ", error);
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
