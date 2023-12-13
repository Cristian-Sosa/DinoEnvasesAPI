import express from "express";
import cors from "cors";
import config from "./config.js";
import usuarioRouter from "./routes/v1/user.routes.js";
import valeRouter from "./routes/v1/vale.routes.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/v1/user", usuarioRouter);

// app.use("/api/v1/envases", envasesRouter);

app.use("/api/v1/vale", valeRouter);

app.set("port", config.port);

export default app;
