import express from "express";
import { getAssignments, getUpcomingAssignment, updateAssignment } from "../controllers/assignment.js"

const router = express.Router();

router.get('/:studentID', getAssignments);
router.get('/:studentID/upcoming', getUpcomingAssignment);
router.patch('/:id', updateAssignment);

export default router;