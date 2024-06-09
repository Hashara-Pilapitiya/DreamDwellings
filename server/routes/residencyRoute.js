import express from "express";
import { createResidency } from "../controllers/residencyController.js";
import { getAllResidencies } from "../controllers/residencyController.js"; 
import { getResidency } from "../controllers/residencyController.js";

const router = express.Router()

router.post("/create", createResidency)
router.get("/allresd", getAllResidencies)
router.get("/:id", getResidency)

export {router as residencyRoute}