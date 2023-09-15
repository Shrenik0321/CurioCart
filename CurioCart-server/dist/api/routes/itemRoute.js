import { getAllItemCategories, getAllItems, addItem, } from "../controllers/itemController.js";
import express from "express";
import { uploadStrategy } from "../middlewares/imageUploadStrategy.js";
const router = express.Router();
router.post("/get-all-items", getAllItems);
router.post("/get-all-item-categories", getAllItemCategories);
router.post("/add-item", uploadStrategy, addItem);
export default router;
//# sourceMappingURL=itemRoute.js.map