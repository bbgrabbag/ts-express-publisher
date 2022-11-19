import { RequestHandler } from "express";

export const demoMiddleware: RequestHandler = (req, res, next) => {
  req.demo = "DEMO";
  res.demo = "DEMO";
  next();
};
