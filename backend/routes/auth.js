const express = require("express");
const router = express.Router();
const User = require("../models/user");
const {body,validationResult} = require("express-validator");
// Create User
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
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).send("Server Error");
    }
  }
);
module.exports = router;
