import Competency from "../models/Competency.js";

export const createCompetency = async (req, res) => {
  try {
    const { title, description } = req.body;

    const competency = await Competency.create({
      title,
      description,
      createdBy: req.user._id
    });

    res.status(201).json(competency);
  } catch (error) {
    res.status(500).json({ message: "Error creating competency", error: error.message });
  }
};

export const getCompetencies = async (req, res) => {
  try {
    const data = await Competency.find().populate("createdBy", "name email role");
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching competencies" });
  }
};

export const getCompetencyById = async (req, res) => {
  try {
    const competency = await Competency.findById(req.params.id);
    if (!competency) return res.status(404).json({ message: "Not found" });
    res.json(competency);
  } catch (error) {
    res.status(500).json({ message: "Error fetching competency" });
  }
};

export const updateCompetency = async (req, res) => {
  try {
    const updated = await Competency.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Not found" });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating competency" });
  }
};

export const deleteCompetency = async (req, res) => {
  try {
    await Competency.findByIdAndDelete(req.params.id);
    res.json({ message: "Competency deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting competency" });
  }
};
