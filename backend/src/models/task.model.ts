import mongoose, { Document } from "mongoose";

export interface TaskDocument extends Document {
  title: string;
  isCompleted: boolean;
}

const taskSchema = new mongoose.Schema<TaskDocument>(
  {
    title: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

const Task = mongoose.model<TaskDocument>("Tasks", taskSchema);

export default Task;
