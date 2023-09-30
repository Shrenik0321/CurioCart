import { getAllItemCategories, getAllItems, addItem, } from "../controllers/itemController.js";
import express from "express";
import { uploadStrategy } from "../middlewares/imageUploadStrategy.js";
import { requireAuth } from "../middlewares/requireAuth.js";
const router = express.Router();
router.use(requireAuth);
router.post("/get-all-items", getAllItems);
router.post("/get-all-item-categories", getAllItemCategories);
router.post("/add-item", uploadStrategy, addItem);
export default router;
//# sourceMappingURL=itemRoute.js.map