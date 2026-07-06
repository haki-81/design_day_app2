import { Router } from "express";
import { getHealthStatus } from "../services/healthService";

export const healthRouter = Router();

healthRouter.get("/", (_req, res) => {
  res.status(200).json(getHealthStatus());
});
