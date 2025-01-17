import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import resourceRoutes from "./routes/resource.routes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(bodyParser.json());
app.use("/api", resourceRoutes);

// Error-handling middleware
app.use(errorHandler);

export default app;
