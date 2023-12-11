import express from "express";
import cors from 'cors'
import config from "./config.js";
import usuarioRouter from "./routes/v1/user.routes.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/v1', usuarioRouter);

app.set("port", config.port);

export default app;
