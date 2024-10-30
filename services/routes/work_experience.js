const express = require("express");
const router = express.Router();
const WorkExperience = require("../models/WorkExperience");

router.post("/", async (req, res) => {
  try {
    const workExperience = await WorkExperience.create(req.body);
    res.status(201).json(workExperience);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const workExperiences = await WorkExperience.findAll();
    res.status(200).json(workExperiences);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const workExperience = await WorkExperience.findByPk(req.params.id);
    if (workExperience) {
      res.status(200).json(workExperience);
    } else {
      res.status(404).json({ message: "Work experience not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const [updated] = await WorkExperience.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedWorkExperience = await WorkExperience.findByPk(
        req.params.id
      );
      res.status(200).json(updatedWorkExperience);
    } else {
      res.status(404).json({ message: "Work experience not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await WorkExperience.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Work experience not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
