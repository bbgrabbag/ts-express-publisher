import express from "express";
import { demoMiddleware } from "../src/";

export const server = express();

server.get("/playground", demoMiddleware, (req, res) => {
  res.status(200).send({
    success: true,
    responseStatus: res.demo,
    requestStatus: req.demo,
  });
});