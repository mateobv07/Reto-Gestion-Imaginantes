import express from "express";
import { getAllAssignmentComments, createComment, deleteComment } from "../controllers/comment.js"

const router = express.Router();

router.get('/:assignmentID', getAllAssignmentComments);
router.post('/', createComment);
router.delete('/:id', deleteComment);

export default router;