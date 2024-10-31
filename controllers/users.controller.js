const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const User = require("../models/user.model"); 
const { generateToken } = require("../helpers/jwt");

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

const userController = {
  registerUser: async (req, res) => {
    const { name, email, password, bio } = req.body;

    const hashedPassword = await bcrypt.hash(password.trim(), 10);
    const newUser = new User({ name, email, password: hashedPassword, bio });

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  },

  loginUser:async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      const token = generateToken(user._id);
      res.json({ message: "Login successful", token });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ message: "Error logging in" });
    }
  }
};

module.exports = userController;;