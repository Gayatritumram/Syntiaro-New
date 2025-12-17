import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";

import innovationRoutes from "./routes/innovationRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "syntiarodb",
});

app.post("/api/career", async (req, res) => {
  const { name, contactNumber, email, message } = req.body;

  if (!name || !contactNumber || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await pool.query(
      "INSERT INTO career (name, contactNumber, email, message) VALUES (?, ?, ?, ?)",
      [name, contactNumber, email, message]
    );

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (err) {
    console.error("DB insert error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

app.use("/api/innovation", innovationRoutes);

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
