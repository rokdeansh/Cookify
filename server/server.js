require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const path = require("path");

const authRoutes = require("./routes/auth");
const recipeRoutes = require("./routes/recipes");
const favRoutes = require("./routes/favorites");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "frontend")));

app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/favorites", favRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
