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

app.post("/login", async (req, res) => {
  try {
    const { mail, password } = req.body;

    if (!mail || !password) {
      return res.status(400).json({
        message: "Mail and password are required",
      });
    }

    const sql = `
  SELECT *
  FROM students
  WHERE mail = ? AND password = ?
`;

    const [rows] = await pool.query(sql, [mail, password]);

    if (rows.length === 0) {
      return res.status(401).json({
        message: "Invalid mail or password",
      });
    }

    const student = rows[0];

    res.status(200).json({
      message: "Login successful",
      student,
    });
  } catch (error) {
    console.log("login error =>", error);
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
