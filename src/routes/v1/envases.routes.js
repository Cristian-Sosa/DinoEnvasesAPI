import { Router } from "express";
import { getAllEnvases, getAllTipoEnvases } from "../../controllers/v1/envases.controller.js"

const router = Router();

router.get('/', getAllEnvases)

router.get('/TipoEnvases', getAllTipoEnvases)

export default router;