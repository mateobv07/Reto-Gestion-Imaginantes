import express from "express";
import { login, getUser, createUser, updateUser, deleteUser } from "../controllers/solicitud.js"

router.get('/:matricula', getUser);
router.post('/login', login);
router.post('/', createUser);
router.patch('/:matricula', updateUser);
router.delete('/:matricula', deleteUser);


const router = express.Router();

export default router;