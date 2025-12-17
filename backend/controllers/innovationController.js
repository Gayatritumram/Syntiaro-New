import pool from "../db.js";

export const submitInnovationForm = async (req, res) => {
  try {
    const {
      name,
      email,
      mobile,
      address,
      education,
      ideaTitle,
      ideaDescription,
    } = req.body;

    const pdfFile = req.file ? req.file.path : null;

    if (!name || !email || !mobile || !ideaTitle || !ideaDescription) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    const [result] = await pool.query(
      `INSERT INTO innovation 
      (name, email, mobile, address, education, ideaTitle, ideaDescription, pdfFile) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, email, mobile, address, education, ideaTitle, ideaDescription, pdfFile]
    );

    res.status(201).json({
      message: "Innovation submitted successfully",
      innovationId: result.insertId,
    });
  } catch (err) {
    console.error("Submit Innovation Error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
