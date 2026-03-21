import { RequestHandler } from "express";

import Task from "../models/task.model";
import { TaskSchema } from "../schemas/task.schema";

export const getTasks: RequestHandler = async (_req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });

  res.json(tasks);
};

export const createTask: RequestHandler = async (req, res) => {
  const result = TaskSchema.parse(req.body);

  const task = await Task.create(result);

  res.status(201).json(task);
};

export const toggleTask: RequestHandler<{ id: string }> = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404).json({ message: "Task not found" });
    return;
  }

  task.isCompleted = !task.isCompleted;
  await task.save();
  res.json(task);
};

export const deleteTask: RequestHandler<{ id: string }> = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);

  if (!task) {
    res.status(404).json({ message: "Task not found" });
    return;
  }

  res.json({ message: "Task deleted" });
};
