import { Router } from "express";
import {
  getAllUsuarios,
  createNewUser,
} from "../controllers/user.controller.js";
import { CreateNewUserValidator } from "../validators/user.validators.js";
import { body } from "express-validator";

const router = Router();

router.get("/AllUsers", getAllUsuarios);

router.get("/AllActiveUsers", getAllUsuarios);

// router.post("/CreateNewUser", CreateNewUserValidator, createNewUser);

router.post("/CreateNewUser", createNewUser);

export default router;
