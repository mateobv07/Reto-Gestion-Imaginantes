import express from "express";
import { getAsignaciones, getAsignacionesPendientes, updateAsignacion } from "../controllers/asignacion.js"

router.get('/:matricula', getAsignaciones);
router.get('/pendientes/:matricula', getAsignacionesPendientes);
router.patch('/:id', updateAsignacion);


const router = express.Router();

export default router;