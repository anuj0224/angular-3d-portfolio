const express = require("express");
const router = express.Router();
const Skills = require("../models/Skills");

router.post("/", async (req, res) => {
  try {
    const skill = await Skills.create(req.body);
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const skills = await Skills.findAll();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const skill = await Skills.findByPk(req.params.id);
    if (skill) {
      res.status(200).json(skill);
    } else {
      res.status(404).json({ message: "Skill not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const [updated] = await Skills.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedSkill = await Skills.findByPk(req.params.id);
      res.status(200).json(updatedSkill);
    } else {
      res.status(404).json({ message: "Skill not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Skills.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Skill not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
