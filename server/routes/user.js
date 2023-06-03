import express from "express";
import { login, getUser, createUser } from "../controllers/user.js"

const router = express.Router();

router.get('/:studentID', getUser);
router.post('/login', login);
router.post('/', createUser);

export default router;