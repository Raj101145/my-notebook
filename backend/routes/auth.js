const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser")

const JWT_SECRET = "mySuperSecretKey"; // Move to .env in production

// =======================
// REGISTER USER
// =======================
router.post(
  "/createuser",
  [
    body("name", "Name must be at least 3 characters").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({ min: 5 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check if user already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "User already exists" });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass
      });

      // Create JWT
      const data = {
        user: {
          id: user.id
        }
      };

      const authToken = jwt.sign(data, JWT_SECRET, { expiresIn: "1h" });

      res.json({ authToken });

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);


// =======================
// LOGIN USER
// =======================
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists()
  ],
  async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Check if user exists
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Invalid credentials" });
      }

      // Compare password
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ error: "Invalid credentials" });
      }

      // Create JWT
      const data = {
        user: {
          id: user.id
        }
      };

      const authToken = jwt.sign(data, JWT_SECRET, { expiresIn: "1h" });

      res.json({ authToken });

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);
// route 3 get logged in user details 
router.post(
  "/getuser",
  fetchuser,
  async (req, res) => {
    try {
      const userId = req.user.id;

      const user = await User.findById(userId).select("-password");

      res.json(user);

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
 