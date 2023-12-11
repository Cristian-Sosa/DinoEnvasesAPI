import { Router } from "express";
import {
  getAllUsers,
  createNewUser,
  getAllActiveUsers,
  validateUser
} from "../../controllers/v1/user.controller.js";
import { CreateNewUserValidator } from "../../validators/v1/user.validators.js";

const router = Router();

router.get("/AllUsers", getAllUsers);

router.get("/AllActiveUsers", getAllActiveUsers);

router.post("/ValidateUser", validateUser);

// router.post("/CreateNewUser", CreateNewUserValidator, createNewUser);

router.post("/CreateNewUser", createNewUser);

export default router;
