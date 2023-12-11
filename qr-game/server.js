const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 3001;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Сохраняем файл с его оригинальным именем
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ url: `/images/${req.file.filename}` });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
