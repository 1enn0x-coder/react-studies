import express from "express";
import pool from "../data.js";

const router = express.Router();

router.get("/provisions/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        message: "Invalid provision id",
      });
    }

    const sql = `
      SELECT id, header, content
      FROM provisions
      WHERE id = ?
    `;

    const [rows] = await pool.query(sql, [id]);

    if (rows.length === 0) {
      return res.status(404).json({
        message: "Provision not found",
      });
    }

    res.json(rows[0]);
  } catch (error) {
    console.log("provisions error => ", error);

    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
});

export default router;
