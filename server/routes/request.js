import express from "express";
import { getAllRequests, createRequest, updateRequest, deleteRequest } from "../controllers/request.js"

const router = express.Router();

router.get('/', getAllRequests);
router.post('/', createRequest);
router.patch('/:id', updateRequest);
router.delete('/:id', deleteRequest);

export default router;