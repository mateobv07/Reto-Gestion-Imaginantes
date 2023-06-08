import express from "express";
import { getAnnouncements } from "../controllers/announcements.js"

const router = express.Router();

router.get('/', getAnnouncements);

export default router;