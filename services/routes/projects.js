const express = require("express");
const router = express.Router();
const Projects = require("../models/Projects");

router.post("/", async (req, res) => {
  try {
    const techArray = req.body.tech ? req.body.tech.split(",") : [];
    const project = await Projects.create({ ...req.body, tech: techArray });
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const projects = await Projects.findAll();
    const formattedProjects = projects.map((project) => ({
      ...project.toJSON(),
      tech: project.tech.join(","),
    }));
    res.status(200).json(formattedProjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const project = await Projects.findByPk(req.params.id);
    if (project) {
      const formattedProject = {
        ...project.toJSON(),
        tech: project.tech.join(","),
      };
      res.status(200).json(formattedProject);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const techArray = req.body.tech ? req.body.tech.split(",") : [];
    const [updated] = await Projects.update(
      { ...req.body, tech: techArray },
      {
        where: { id: req.params.id },
      }
    );
    if (updated) {
      const updatedProject = await Projects.findByPk(req.params.id);
      const formattedUpdatedProject = {
        ...updatedProject.toJSON(),
        tech: updatedProject.tech.join(","),
      };
      res.status(200).json(formattedUpdatedProject);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Projects.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
