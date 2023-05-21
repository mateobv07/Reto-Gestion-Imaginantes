import express from "express";
import { getAsignaciones, getAsignacionesPendientes, updateAsignacion } from "../controllers/asignacion.js"

const router = express.Router();

router.get('/:matricula', getAsignaciones);
router.get('/pendientes/:matricula', getAsignacionesPendientes);
router.patch('/:id', updateAsignacion);

export default router;