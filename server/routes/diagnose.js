import express from "express";
import mockData from "../data/mockData.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { language, code } = req.body;

  if (!language) {
    return res.status(400).json({
      success: false,
      message: "Language is required",
    });
  }

  if (!code) {
    return res.status(400).json({
      success: false,
      message: "Code is required",
    });
  }

  const result = mockData[language.toLowerCase()];

  if (!result) {
    return res.status(404).json({
      success: false,
      message: "Unsupported language",
    });
  }

  return res.status(200).json({
    success: true,
    originalCode: code,
    data: result,
  });
});

export default router;
