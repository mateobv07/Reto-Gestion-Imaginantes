import express from "express";
import { getOtherRequests, createRequest, updateRequest, deleteRequest, getMyRequests } from "../controllers/request.js"

const router = express.Router();

router.get('/:studentID', getOtherRequests);
router.get('/:studentID/my', getMyRequests);
router.post('/', createRequest);
router.patch('/:id', updateRequest);
router.delete('/:id', deleteRequest);

export default router;