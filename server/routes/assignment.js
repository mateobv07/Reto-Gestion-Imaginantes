import express from "express";
import { getAssignments, getAssignmentsPending, updateAssignment } from "../controllers/assignment.js"

const router = express.Router();

router.get('/:studentID', getAssignments);
router.get('/pending/:studentID', getAssignmentsPending);
router.patch('/:id', updateAssignment);

export default router;