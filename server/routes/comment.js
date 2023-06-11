import express from "express";
import { getAllAssignmentComments, createComment, deleteComment } from "../controllers/comment.js"
import Auth from "../middleware/auth.js";

const router = express.Router();

router.get('/:assignmentID', Auth, getAllAssignmentComments);
router.post('/', Auth, createComment);
router.delete('/:id', Auth, deleteComment);

export default router;