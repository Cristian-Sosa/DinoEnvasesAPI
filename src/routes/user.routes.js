import { Router } from "express";
import {
  getAllUsuarios,
  getSingleUsuario,
} from "../controllers/user.controller.js";
import { SingleUserValidator } from "../validators/user.validators.js";

const router = Router();

router.get("/usuarios", getAllUsuarios);

router.post("/usuario", SingleUserValidator, getSingleUsuario);

export default router;
