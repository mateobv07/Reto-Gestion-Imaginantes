import express from "express";
import { getAllSolicitud, createSolicitud, updateSolcitud, deleteSolicitud } from "../controllers/solicitud.js"

router.get('/', getAllSolicitud);
router.post('/', createSolicitud);
router.patch('/:id', updateSolcitud);
router.delete('/:id', deleteSolicitud);


const router = express.Router();

export default router;