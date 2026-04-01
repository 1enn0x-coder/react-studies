import express from "express";
import { z } from "zod";
import pool from "../data.js";

const router = express.Router();

const registerSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  lastname: z.string().min(1, "Lastname is required").max(100),
  mail: z.email("Invalid email"),
  phone_number: z.string().min(1, "Phone number is required").max(30),
  class_number: z.coerce
    .number()
    .int()
    .positive("Class number must be a positive number"),
  region: z.string().min(1, "Region is required").max(100),
  nickname: z.string().min(1, "Nickname is required").max(100),
  password: z.string().min(6, "Password must be at least 6 characters"),
  is_active: z.coerce.number().int().optional().default(1),
});
const loginSchema = z.object({
  mail: z.email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

router.post("/register", async (req, res) => {
  try {
    const validated = registerSchema.safeParse(req.body);

    if (!validated.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validated.error.flatten().fieldErrors,
      });
    }

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
    } = validated.data;

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

router.post("/login", async (req, res) => {
  const { mail, password } = req.body;

  try {
    const sql = "SELECT * FROM students WHERE mail = ?";
    const [result] = await pool.query(sql, [mail]);

    if (result.length === 0) {
      return res.status(401).json({ message: "User or password is incorrect" });
    }

    if (result[0].password !== password) {
      return res.status(401).json({ message: "User or password is incorrect" });
    }

    res.json({ message: "User logged in successfully" });
  } catch (error) {
    console.log("error here => ", error);
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
});

export default router;
