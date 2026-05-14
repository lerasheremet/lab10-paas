const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/about", (req, res) => {
  res.json({
    name: "Lab 10 — PaaS Deployment",
    student: process.env.STUDENT_NAME || "Unknown",
    platform: "Railway / Render",
  });
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
