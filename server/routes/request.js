import express from "express";
import { getOtherRequests, createRequest, updateRequest, deleteRequest, getMyRequests } from "../controllers/request.js"
import Auth from "../middleware/auth.js";

const router = express.Router();

router.get('/:studentID', Auth, getOtherRequests);
router.get('/:studentID/my', Auth, getMyRequests);
router.post('/', Auth, createRequest);
router.patch('/:id', Auth, updateRequest);
router.delete('/:id', Auth, deleteRequest);

export default router;