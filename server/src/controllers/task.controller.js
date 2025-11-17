import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  try {
    const { competency, title, description, level } = req.body;

    const task = await Task.create({
      competency,
      title,
      description,
      level,
      createdBy: req.user._id
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error creating task", error: error.message });
  }
};

export const getTasksByCompetency = async (req, res) => {
  try {
    const tasks = await Task.find({ competency: req.params.competencyId })
      .populate("competency", "title")
      .populate("createdBy", "name");

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated) return res.status(404).json({ message: "Task not found" });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating task" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task" });
  }
};
