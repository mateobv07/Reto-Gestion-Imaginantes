import express from "express";
import { getAllSolicitud, createSolicitud, updateSolcitud, deleteSolicitud } from "../controllers/solicitud.js"

const router = express.Router();

router.get('/', getAllSolicitud);
router.post('/', createSolicitud);
router.patch('/:id', updateSolcitud);
router.delete('/:id', deleteSolicitud);

export default router;