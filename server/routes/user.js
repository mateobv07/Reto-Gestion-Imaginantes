import express from "express";
import { login, getUser, createUser, updateUser, deleteUser } from "../controllers/user.js"

const router = express.Router();

router.get('/:studentID', getUser);
router.post('/login', login);
router.post('/', createUser);
router.patch('/:studentID', updateUser);
router.delete('/:studentID', deleteUser);

export default router;