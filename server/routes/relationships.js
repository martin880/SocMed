import express from "express";
import { getRelationships, addRelationships, deleteRelationships } from "../controllers/relatioship.js";

const router = express.Router();

router.get("/", getRelationships);
router.post("/", addRelationships);
router.delete("/", deleteRelationships);

export default router;