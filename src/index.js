import path from "path";
import express from "express";

const app = express();
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "dist"))); // your build folder

// serve index.html for frontend routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
