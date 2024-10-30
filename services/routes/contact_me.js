const express = require("express");
const router = express.Router();
const ContactMe = require("../models/ContactMe");

router.post("/", async (req, res) => {
  try {
    const contactEntry = await ContactMe.create(req.body);
    res.status(201).json(contactEntry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const contactEntries = await ContactMe.findAll();
    res.status(200).json(contactEntries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
