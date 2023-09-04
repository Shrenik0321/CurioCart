import { getAllItemCategories, getAllItems, } from "../controllers/itemController.js";
import express from "express";
const router = express.Router();
router.get("/get-all-items", getAllItems);
router.get("/get-all-item-categories", getAllItemCategories);
export default router;
//# sourceMappingURL=itemRoute.js.map