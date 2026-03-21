import { Router } from "express";

import {
  createTask,
  deleteTask,
  getTasks,
  toggleTask,
} from "../controllers/task.controller";

import validateObjectId from "../middleware/validateObjectId";

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:id", validateObjectId, toggleTask);
router.delete("/:id", deleteTask);

export default router;
