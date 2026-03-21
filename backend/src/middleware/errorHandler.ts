import { ErrorRequestHandler } from "express";
import z, { ZodError } from "zod";

const errorHandler: ErrorRequestHandler = (err, _req, res, next) => {
  if (err instanceof ZodError) {
    res.status(400).json({ error: z.flattenError(err) });
  }

  next();
};

export default errorHandler;
