import express from "express";
import { getAllAsignacionComentarios, createComentario, deleteComentario } from "../controllers/comentario.js"

const router = express.Router();

router.get('/:id', getAllAsignacionComentarios);
router.post('/', createComentario);
router.delete('/:id', deleteComentario);

export default router;