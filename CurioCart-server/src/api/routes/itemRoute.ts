import { getAllItems } from "../controllers/itemController.js";
import express from "express";

const router = express.Router();

router.get("/get-all-items", getAllItems);

export default router;
