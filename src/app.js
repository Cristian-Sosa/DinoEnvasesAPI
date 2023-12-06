import express from "express";
import config from "./config.js";
import usuarioRouter from "./routes/user.routes.js";

const app = express();

app.use(usuarioRouter);

app.set("port", config.port);

export default app;
