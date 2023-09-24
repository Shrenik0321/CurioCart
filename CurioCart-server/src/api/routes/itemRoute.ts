import {
  getAllItemCategories,
  getAllItems,
  addItem,
} from "../controllers/itemController.js";
import express from "express";
import { uploadStrategy } from "../middlewares/imageUploadStrategy.js";
import { requireAuth } from "../middlewares/requireAuth.js";

const router = express.Router();

router.post("/get-all-items", requireAuth, getAllItems);
router.post("/get-all-item-categories", requireAuth, getAllItemCategories);
router.post("/add-item", requireAuth, uploadStrategy, addItem);

export default router;
