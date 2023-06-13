import express from "express";
import { getOtherRequests, createRequest, updateRequest, deleteRequest, getMyRequests, getOne } from "../controllers/request.js"
import Auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', Auth, getOtherRequests);
router.get('/my', Auth, getMyRequests);
router.get('/:id', Auth, getOne);
router.post('/', Auth, createRequest);
router.patch('/:id', Auth, updateRequest);
router.delete('/:id', Auth, deleteRequest);

export default router;