import { Router } from "express";
import { addNewVale } from "../../controllers/v1/vale.controller.js";

const router = Router()

router.post('/AddVale', addNewVale)

export default router;