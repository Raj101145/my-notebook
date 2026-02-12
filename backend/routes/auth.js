const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Create User
router.post("/createuser", async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        res.json(user);
    } catch (error) {
        res.status(500).send("Server Error");
    }
});

module.exports = router;
