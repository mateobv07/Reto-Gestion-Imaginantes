import express from "express";
import { login, getUser, createUser, updateUser, deleteUser } from "../controllers/usuario.js"

const router = express.Router();

router.get('/:matricula', getUser);
router.post('/login', login);
router.post('/', createUser);
router.patch('/:matricula', updateUser);
router.delete('/:matricula', deleteUser);

export default router;