import express from "express";

const app = express();
const PORT = 3000;

app.get("/api/status", (req, res) => {
  res.json({
    status: "ok",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});