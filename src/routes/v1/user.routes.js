import { Router } from "express";
import {
  getAllUsers,
  createNewUser,
  getAllActiveUsers,
  validateUser,
} from "../../controllers/v1/user.controller.js";

const router = Router();

router.get("/AllUsers", getAllUsers);

router.get("/AllActiveUsers", getAllActiveUsers);

router.post("/ValidateUser", validateUser);

router.post("/CreateNewUser", createNewUser);

export default router;
