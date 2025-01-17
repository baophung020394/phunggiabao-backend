import express from "express";
import {
  listResources,
  getResource,
  createResourceHandler,
  updateResourceHandler,
  deleteResourceHandler,
} from "../controllers/resource.controller";
import { AppError } from "../middleware/errorHandler";

const router = express.Router();

router.get("/resources", listResources);
router.get("/resource/:id", getResource);
router.post("/resource", createResourceHandler);
router.put("/resource/:id", updateResourceHandler);
router.delete("/resource/:id", deleteResourceHandler);

router.get("/error", (req, res, next) => {
  next(new AppError("This is a test error", 400));
});

export default router;
