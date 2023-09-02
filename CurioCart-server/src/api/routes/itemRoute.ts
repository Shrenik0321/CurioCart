import { getAllItems } from "../controllers/itemController.js";
import express from "express";

const router = express.Router();

router.post("/get-all-items", getAllItems);

export default router;
