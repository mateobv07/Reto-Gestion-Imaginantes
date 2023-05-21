import express from "express";
import { getAllAsignacionComentarios, createComentario, deleteComentario } from "../controllers/comentario.js"

router.get('/:id', getAllAsignacionComentarios);
router.post('/', createComentario);
router.delete('/:id', deleteComentario);


const router = express.Router();

export default router;