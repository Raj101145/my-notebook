const express = require("express");
const router = express.Router();
const Note = require("../models/notes");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

// Add Note
router.post("/addnote", fetchuser, async (req, res) => {
    try {
        const note = await Note.create({
            user: req.user.id,
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag
        });

        res.json(note);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// fetchallnotes
router.get("/fetchallnotes",fetchuser,async(req,res)=>{
    const notes = await Note.find({user: req.user.id});
    res.json(notes);
})

// =======================
// UPDATE NOTE
// =======================
router.put("/updatenote/:id", fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        // Create newNote object
        const newNote = {};
        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }

        // Find the note to update
        let note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).send("Note not found");
        }

        // 🔥 VERY IMPORTANT CHECK
        // Allow update only if user owns this note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        // Update note
        note = await Note.findByIdAndUpdate(
            req.params.id,
            { $set: newNote },
            { new: true }
        );

        res.json(note);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});
// =======================
// DELETE NOTE
// =======================
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
    try {
        // Find note
        let note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).send("Note not found");
        }

        // 🔥 Security Check - Only owner can delete
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        // Delete note
        await Note.findByIdAndDelete(req.params.id);

        res.json({ success: "Note deleted successfully" });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});





module.exports = router;
