import express from "express";
import router from "./router.js";
import middleware from "./middleware.js";
const app = express();

// use middleware
app.use(router);
app.use(middleware);

export default app;
