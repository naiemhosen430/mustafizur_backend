import express from "express";
import siteRouter from "../site.router.js";
const router = express.Router();

router.use(siteRouter);

export default router;
