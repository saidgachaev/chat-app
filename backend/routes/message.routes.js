import express from "express";
import { sendMessage } from "../controllers/message.controller.js";
import ptorectRoute from "../middleware/ptorectRoute.js";

const router = express.Router();

router.post("/send/:id", ptorectRoute, sendMessage)

export default router;