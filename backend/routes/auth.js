const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {

  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      password: hashed,
      isVerified: true
    });

    await user.save();

    res.json({ message: "Registration successful" });
  } catch (err) {
    res.status(500).json({ message: "Registration failed" });
  }

});

router.post("/login", async (req, res) => {

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });
    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(401).json({ message: "Wrong password" });

    res.json({ message: "Login success", userId: user._id, username: user.username });
  } catch (err) {
    res.status(500).json({ message: "Login failed" });
  }

});

module.exports = router;
