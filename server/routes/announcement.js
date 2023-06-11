import express from "express";
import { getAnnouncements } from "../controllers/announcements.js"
import Auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', Auth, getAnnouncements);

export default router;