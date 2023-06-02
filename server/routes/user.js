import express from "express";
import { login, getUser, createUser, updateUser } from "../controllers/user.js"

const router = express.Router();

router.get('/:studentID', getUser);
router.post('/login', login);
router.post('/', createUser);
router.patch('/:studentID', updateUser);

export default router;