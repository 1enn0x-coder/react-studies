import express from "express";
import mysql from "mysql2/promise";
import authRoutes from "./routes/auth.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", authRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
