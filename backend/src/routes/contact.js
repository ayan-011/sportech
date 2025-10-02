import { Router } from "express";
import Contact from "../models/Contact.js";

const router = Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, comment } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({ message: "name, email, phone are required" });
    }
    const created = await Contact.create({ name, email, phone, comment });
    return res.status(201).json(created);
  } catch (err) {
    return res.status(500).json({ message: "Failed to create contact" });
  }
});

// GET /api/contact
router.get("/", async (_req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.json(contacts);
  } catch (err) {
    return res.status(500).json({ message: "Failed to fetch contacts" });
  }
});

// DELETE /api/contact/:id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Contact.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Contact not found" });
    }
    return res.json({ ok: true });
  } catch (err) {
    return res.status(500).json({ message: "Failed to delete contact" });
  }
});

export default router;


