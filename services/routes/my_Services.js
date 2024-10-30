const express = require("express");
const router = express.Router();
const MyServices = require("../models/MyServices");

router.post("/", async (req, res) => {
  try {
    const service = await MyServices.create(req.body);
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const services = await MyServices.findAll();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const service = await MyServices.findByPk(req.params.id);
    if (service) {
      res.status(200).json(service);
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const [updated] = await MyServices.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedService = await MyServices.findByPk(req.params.id);
      res.status(200).json(updatedService);
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await MyServices.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
