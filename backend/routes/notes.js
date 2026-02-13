const express = require("express");
const router = express.Router();
const Note = require("../models/Notes");

// Add Note
router.post("/addnote", async (req, res) => {
    try {
        const note = await Note.create({
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag
        });

        res.json(note);
    } catch (error) {
        res.status(500).send("Server Error");
    }
});

module.exports = router;
