const express = require("express");
const router = express.Router();
const Education = require("../models/Education");

router.post("/", async (req, res) => {
  try {
    const education = await Education.create(req.body);
    res.status(201).json(education);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const educationEntries = await Education.findAll();
    res.status(200).json(educationEntries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const educationEntry = await Education.findByPk(req.params.id);
    if (educationEntry) {
      res.status(200).json(educationEntry);
    } else {
      res.status(404).json({ message: "Education entry not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const [updated] = await Education.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedEducation = await Education.findByPk(req.params.id);
      res.status(200).json(updatedEducation);
    } else {
      res.status(404).json({ message: "Education entry not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Education.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Education entry not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
