const express = require("express");
const router = express.Router();

// @route  POST api/contacts
// @desc   Get all users contacts
// @access Public
router.get("/", (req,res) => {
    res.send("Get all contacts");
});

// @route  POST api/contacts
// @desc   Add new contact
// @access Private
router.post("/", (req,res) => {
    res.send("Add contacts");
});

// @route  PUT api/contacts/:id
// @desc   Update contact
// @access Private
router.put("/:id", (req,res) => {
    res.send("Update contact");
});

// @route  DELETE api/contacts/:id
// @desc   Update contact
// @access Private
router.delete("/:id", (req,res) => {
    res.send("Delete contact");
});




module.exports = router;