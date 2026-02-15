const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "mySuperSecretKey";


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
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "User already exists" });
            }

            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);

            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass
            });
            const data = {
                user: {
                    id: user.id
                }
            };

            const authToken = jwt.sign(data, JWT_SECRET);

            res.json({ authToken });




        } catch (error) {
            console.log(error);
            res.status(500).send("Server Error");
        }
    }
);

module.exports = router;
