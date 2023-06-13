import express from "express";
import { getAssignments, getUpcomingAssignment, updateAssignment,getOneAssignment } from "../controllers/assignment.js"
import Auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', Auth, getAssignments);
router.get('/upcoming', Auth, getUpcomingAssignment);
router.get('/:id', Auth, getOneAssignment);
router.patch('/:id', Auth, updateAssignment);

export default router;