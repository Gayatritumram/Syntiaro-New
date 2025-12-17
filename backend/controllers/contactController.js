import pool from "../db.js";

export const submitContact = async (req, res) => {
  try {
    const { name, contactNumber, email, message } = req.body;

   
    if (!name || !contactNumber || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

   
    const [result] = await pool.query(
      "INSERT INTO career (name, contactNumber, email, message) VALUES (?, ?, ?, ?)",
      [name, contactNumber, email, message]
    );

    res.status(200).json({
      message: "Form submitted successfully.",
      contactId: result.insertId,
    });
  } catch (error) {
    console.error("Submission error:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
