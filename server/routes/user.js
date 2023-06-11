import express from "express";
import Auth from "../middleware/auth.js";
import { login, getUser, createUser } from "../controllers/user.js"

const router = express.Router();

router.get('/:studentID', Auth, getUser);
router.post('/login', login);
router.post('/', createUser);

export default router;