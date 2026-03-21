import { RequestHandler } from "express";
import mongoose from "mongoose";

const validateObjectId: RequestHandler<{ id: string }> = (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid ObjectId" });
    return;
  }

  next();
};

export default validateObjectId;
