import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import taskRoutes from "./routes/task.routes";
import connectDB from "./config/db";
import errorHandler from "./middleware/errorHandler";

const port = process.env.PORT || 4000;

const app = express();

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, req.path);
  next();
};

app.use(logger);
app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);
// TODO: Finish This Error handler
app.use(errorHandler);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
