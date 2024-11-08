import express from "express";
import path from "path";
const __dirname = path.resolve();

const app = express();
// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Catch-all route to serve the frontend's index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

app.listen(3000, () => {
  console.log("Server listeining at 3000");
});
