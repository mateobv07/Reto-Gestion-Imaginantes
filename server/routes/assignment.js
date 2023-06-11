import express from "express";
import { getAssignments, getUpcomingAssignment, updateAssignment } from "../controllers/assignment.js"
import Auth from "../middleware/auth.js";

const router = express.Router();

router.get('/:studentID', Auth, getAssignments);
router.get('/:studentID/upcoming', Auth, getUpcomingAssignment);
router.patch('/:id', Auth, updateAssignment);

export default router;