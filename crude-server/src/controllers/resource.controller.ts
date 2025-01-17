import { Request, Response, NextFunction } from "express";
import {
  getAllResources,
  getResourceById,
  createResource,
  updateResource,
  deleteResource,
} from "../models/resource.model";
import { AppError } from "../middleware/errorHandler";
import { formatResponse } from "../utils/responseFormatter";

export const listResources = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { filter, sortBy, sortOrder, page, pageSize } = req.query;
    const resources = await getAllResources(
      filter as string,
      sortBy as string,
      sortOrder as "asc" | "desc",
      Number(page),
      Number(pageSize)
    );
    res.json(formatResponse(true, resources, "Resources fetched successfully"));
  } catch (error) {
    next(new AppError("Failed to list resources", 500));
  }
};
export const getResource = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const resource = await getResourceById(Number(id));
    if (resource) {
      res.json(formatResponse(true, resource, "Resource fetched successfully"));
    } else {
      next(new AppError("Resource not found", 404));
    }
  } catch (error) {
    next(new AppError("Failed to get resource", 500));
  }
};

export const createResourceHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, description } = req.body;
    const [id] = await createResource({ name, description });
    res
      .status(201)
      .json(formatResponse(true, { id }, "Resource created successfully"));
  } catch (error) {
    next(new AppError("Failed to create resource", 500));
  }
};

export const updateResourceHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    await updateResource(Number(id), { name, description });
    res.json(formatResponse(true, null, "Resource updated successfully"));
  } catch (error) {
    next(new AppError("Failed to update resource", 500));
  }
};

export const deleteResourceHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await deleteResource(Number(id));
    res.json(formatResponse(true, null, "Resource deleted successfully"));
  } catch (error) {
    next(new AppError("Failed to delete resource", 500));
  }
};
