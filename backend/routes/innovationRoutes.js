import express from "express";
import { submitInnovationForm } from "../controllers/innovationController.js";
import { upload } from "../middleware/upload.js";  

const router = express.Router();

router.post("/", upload.single("pdfFile"), submitInnovationForm);

export default router;
