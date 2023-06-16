import express from "express";
import { getLikes, addLikes, deleteLikes } from "../controllers/like.js";

const router = express.Router();

router.get("/", getLikes);
router.get("/", addLikes);
router.get("/", deleteLikes);

export default router;