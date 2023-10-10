import express from "express";
import { siteCreateControler } from "./site.controler.js";
const siteRouter = express.Router();

siteRouter.post("/create", siteCreateControler);

export default siteRouter;
